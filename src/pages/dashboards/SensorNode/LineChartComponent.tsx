import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { useAtom } from "jotai";
import { loadedAtom, sensorHistoryAtom } from "src/api/hooks";
import { sensors } from "src/api/constants";
import { Skeleton } from "@material-ui/core";

const DATA = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const OPTIONS = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChartComponent = ({ data = DATA, options = OPTIONS }) => {
  const [sensorHistory] = useAtom(sensorHistoryAtom);
  const [loaded] = useAtom(loadedAtom)
  const chart = useRef(null)

  const points = 20
  if(loaded){
  let dataBuffer = {
    labels: [],
  }
  Array.from({length: points}, () => dataBuffer.labels.push(0));
  dataBuffer.labels = sensorHistory.time.map(it => `${it.getHours()}: ${it.getSeconds()}`).slice(points * -1)
  sensors.forEach(item => {
    dataBuffer[item] = []
    Array.from({length: points}, () => dataBuffer[item].push(0));
    dataBuffer[item] = sensorHistory[item.replace("_", ".")]
    if(dataBuffer[item])
      dataBuffer[item] = dataBuffer[item].slice(points * -1)
  })



  data = {
    labels: dataBuffer.labels,
    datasets: sensors.map((item) => {
      return {
        label: item,
        data: dataBuffer[item],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      };
    }),
  };

  
  return <Line ref={chart} data={data} options={options} />;}
  else
  return <Skeleton />
};

export default LineChartComponent;
