// import { sensors } from "./constants";
import axios from 'redaxios';


interface SensorData {
  time: string;
  value: number;
  slug:
    | "CO"
    | "H2S"
    | "SO2"
    | "NO2"
    | "O3"
    | "CH4"
    | "NH3"
    | "CO2"
    | "PM1.0"
    | "PM2.5"
    | "PM10"
    | "H"
    | "T";
}

export const getData = async () => {
  // let data = {};
  // await setTimeout(() => {}, 5000);
  // sensors.forEach((element) => {
  //   data[element] = {
  //     slug: element,
  //     value: Math.round(Math.random() * 100),
  //     time: new Date().toISOString(),
  //   };
  // });
  return await axios.get<SensorData[]>('https://6ejhix.deta.de/sensor/node/NodeMCU-1.0/last/all');
};

export const getAqiData = async () => {
  // Server Replica
  let aqi = [];
  let data = {};
  Array.from({ length: 35 }, () => {
    aqi.push(Math.round(Math.random() * 10), 2);
    return null
  });
  aqi.forEach((val, index) => {
    var d = new Date();
    d.setDate(d.getDate() - index);
    data[`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`] = val;
  });

  /**
   *  Expected Data Format returned from server
   *  {
   *    2021-10-34 : 12.5
   * }
   */

  // Create Seperate arrays for chart js
  let date = [];
  let value = [];
  var dateArr = Object.keys(data);
  date = dateArr.map((item, index) => {
    value.push(aqi[index]);
    const parts = item.split("-");
    return new Date(
      parseInt(parts[0]),
      parseInt(parts[1]) - 1,
      parseInt(parts[2])
    );
  });

  return {
    date,
    value,
  };
};



// AXIOS

