import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Box,
  CardHeader,
  Menu,
  MenuItem,
  Typography,
  CardContent
} from '@material-ui/core';

import { experimentalStyled } from '@material-ui/core/styles';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';
import TasksAnalyticsChart from './AqiChartComponent';
import { getAqiData } from 'src/api/backend';

const TasksAnalyticsChartWrapper = experimentalStyled(TasksAnalyticsChart)(
  ({ theme }) => `
        height: 200px;
`
);

const DotPrimaryLight = experimentalStyled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.lighter};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotPrimary = experimentalStyled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

function AqiChart() {
  

  const transactions = {
    next: [32,43,53,12,53,53,75],
    current: [28, 47, 41, 34, 69, 91, 49],
    last: [38, 85, 64, 40, 97, 82, 58]
  };

  const generic = {
    month: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    week: {
      labels: [
        'Sun',
        'Mon',
        'Tue',
        'Web',
        'Thu',
        'Fri',
        'Sat'
      ]
    }
  };

  const periods = [
    {
      value: 'current_week',
      text: 'This Week'
    },
    {
      value: 'yesterday',
      text: 'Last Week'
    },
    {
      value: 'last_month',
      text: 'Week 12'
    },
    {
      value: 'last_year',
      text: 'Week 11'
    }
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[3].text);

  return (
    <Card sx={{ height: '100%' }}>
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
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              {periods.map((_period) => (
                <MenuItem
                  key={_period.value}
                  onClick={() => {
                    setPeriod(_period.text);
                    setOpenMenuPeriod(false);
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
            sx={{ display: 'flex', alignItems: 'center', mr: 2 }}
          >
            <DotPrimary />
            Current Week
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <DotPrimaryLight />
            Last Week
          </Typography>
        </Box>
        <Box height={200}>
          <TasksAnalyticsChartWrapper
            data={transactions}
            labels={generic.week.labels}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default AqiChart;


const processData = () => {
  getAqiData().then(({date, value})=> {


    

  })
}

