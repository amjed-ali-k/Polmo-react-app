import { Card, CardContent, CardHeader, Skeleton } from "@material-ui/core";
import { Radar } from "react-chartjs-2";

import { useAtom } from "jotai";
import { counterAtom, loadedAtom } from "src/api/hooks";
import { sensors } from "src/api/constants";


function LiveValues() {

  const [sensorReadings] = useAtom(counterAtom);
  const [loaded] = useAtom(loadedAtom)

  let readingsArray = []
  if(loaded) {sensors.map((item)=> (
    readingsArray.push(sensorReadings[item].value)
  ))}
  

  const data = {
    labels: sensors,
    datasets: [
      {
        // label: '# of Votes',
        data: readingsArray,
        backgroundColor: "rgb(200 81 113)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scale: {
      ticks: {
        beginAtZero: true,
        display: false,
      },
      gridLines: {
        color: "rgba(140, 124, 240, 0.16)",
      },
    },
    legend: {
      display: false,
    },
  };
  return (
    <Card style={{ height: "100%" }}>
      <CardHeader
        title="Live Values"
        titleTypographyProps={{ variant: "h3" }}
      />
      <CardContent>
        {loaded? <Radar data={data} options={options} />: <Skeleton variant="rectangular" width={'100%'} height={'248px'} />
  }
      </CardContent>
    </Card>
  );
}

export default LiveValues;
