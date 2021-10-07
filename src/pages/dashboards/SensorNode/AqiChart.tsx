import { useRef, useState, useEffect } from "react";
import {
  Button,
  Card,
  Box,
  CardHeader,
  Menu,
  MenuItem,
  Typography,
  CardContent,
} from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
import getWeek from "date-fns/getWeek";

import TasksAnalyticsChart from "./AqiChartComponent";
import { useAQIbackendCalls } from "src/api/hooks";

// Type Definitions
interface AqiDataType {
  [key: number]: {
    value: number[];
  };
}

interface DataSetsType {
  label: string;
  backgroundColor: string;
  data: number[];
  barThickness: number;
  maxBarThickness: number;
  barPercentage: number;
  categoryPercentage: number;
}

const generic = {
  month: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  week: {
    labels: ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"],
  },
};
const periods = [
  {
    value: "current_week",
    text: "This Week",
  },
  {
    value: "yesterday",
    text: "Last Week",
  },
  {
    value: "last_month",
    text: "Week 12",
  },
  {
    value: "last_year",
    text: "Week 11",
  },
];

function AqiChart() {
  const [aqiData, setAqiData] = useState<AqiDataType>(null); // TODO:  Move to Jotai Atom
  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>("Loading...");
  const [dataSet, setDataSet] = useState<DataSetsType[]>(null);

  useAQIbackendCalls(setAqiData); // TODO: Move To Page Root ( To avoid backend Calls While Rerendering Element )

  let periods = [];
  useEffect(() => {
    if (aqiData) {
      // Getting Current Week Number
      const thisWeek = getWeek(new Date());
      // Updating Periods and Keys - For Better User Understanding
      for (var key of Object.keys(aqiData)) {
        periods.push({
          text:
            parseInt(key) === thisWeek
              ? "This Week"
              : parseInt(key) === thisWeek - 1
              ? "Last Week"
              : `Week ${key.toString()}`,
          value: key.toString(),
        });
      }
      if (periods[0]) {
        setPeriod(periods[0].text);
      }

      // Adding 3 Datas to DataSet [] - To use it as inital Data on chart


    }
  }, [aqiData]);

  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader
        action={
          <>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {period}
            </Button>
            <Menu
              anchorEl={actionRef1.current}
              onClose={() => setOpenMenuPeriod(false)}
              open={openPeriod}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {periods.map((_period) => (
                <MenuItem
                  key={_period.value}
                  onClick={() => {
                    setPeriod(_period.text);
                    setOpenMenuPeriod(false);
                    // TODO: Add function to change DataSet
                  }}
                >
                  {_period.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        }
        title="AQI Chart"
      />
      <CardContent sx={{ pt: 0 }}>
        <Box display="flex" alignItems="center" pl={1} pb={3}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <DotPrimaryLight />
            Next Week
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center", mr: 2 }}
          >
            <DotPrimary />
            Current Week
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <DotPrimaryLight />
            Last Week
          </Typography>
        </Box>
        <Box height={200}>
          <TasksAnalyticsChartWrapper
            data={aqiData}
            labels={generic.week.labels}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default AqiChart;

const TasksAnalyticsChartWrapper = experimentalStyled(TasksAnalyticsChart)(
  ({ theme }) => `
        height: 200px;
`
);

const DotPrimaryLight = experimentalStyled("span")(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.lighter};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotPrimary = experimentalStyled("span")(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);
