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
  Skeleton
} from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
import getWeek from "date-fns/getWeek";
import {useAtom} from 'jotai'

import TasksAnalyticsChart from "./AqiChartComponent";
import { aqiDataAtom, aqiLoadedAtom } from "src/api/hooks";

// Type Definitions

interface DataSetsType {
  label: string;
  backgroundColor: string;
  data: number[];
  barThickness: number;
  maxBarThickness: number;
  barPercentage: number;
  categoryPercentage: number;
}

interface PeriodType {
  text: string;
  value: string;
  index: number;
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

// let periods = [];
function AqiChart() {
  const [aqiData] = useAtom(aqiDataAtom);
  const [loaded] = useAtom(aqiLoadedAtom)
  const actionRef1 = useRef<any>(null);
  const [periods, setPeriods] = useState<PeriodType[]>([])
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<PeriodType>(null);
  const [dataSet, setDataSet] = useState<DataSetsType[]>([]);
  

  useEffect(() => {
    if (aqiData) {
      let _dataSet = [];
      let _periods = [];
      // Getting Current Week Number
      const thisWeek = getWeek(new Date());
      // Updating Periods and Keys - For Better User Understanding
      for (var key of Object.keys(aqiData)) {
        const label =
          parseInt(key) === thisWeek
            ? "This Week"
            : parseInt(key) === thisWeek - 1
            ? "Last Week"
            : `Week ${key.toString()}`;

   
        _periods.push({
          text: label,
          value: key.toString(),
          index: _periods.length
        });

        _dataSet.push(aqiData[key]);

      }
      setDataSet(_dataSet.reverse());
      setPeriods(_periods.reverse())
      // Only set period if it exists. Server backend calls takes time, so results will be null at first time.
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aqiData]);

  useEffect(() => {
    setPeriod(periods[0])
  }, [periods])

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
              { (loaded && period?.text)? period.text: 'Loading...'}
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
                    setPeriod(_period);
                    setOpenMenuPeriod(false);
                    // TODO: Add function to change DataSet
                  }}
                >
                  {_period?.text}
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
            sx={{ display: "flex", alignItems: "center", mr: 2  }}
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
        {loaded? <TasksAnalyticsChartWrapper
            data={formatColors(dataSet, period?.index)}
            labels={generic.week.labels}
          />: <Skeleton />}
        </Box>
      </CardContent>
    </Card>
  );
}

export default AqiChart;

const formatColors = (dataSet: DataSetsType[], index: number) => {
  const chip = dataSet.slice(index-1, index+2)
  if (index === 0) return { current: chip[0], next: chip[1]}
  if (index === dataSet.length) return { prev: chip[0], current: chip[1]}
  return { prev: chip[0], current: chip[1], next: chip[2]}
}

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
