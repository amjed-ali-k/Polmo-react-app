import axios from "redaxios";
import { SensorDataCollection, sensors, ServerData } from "./constants";

export const getData = async (): Promise<SensorDataCollection> => {
  let sd = {};
  const { data } = await axios.get<ServerData[]>(
    "https://6ejhix.deta.dev/sensor/node/752b40ba-ebc0/last/all"
  );
  data.forEach((element) => {
    if (sensors.includes(element.sensor)) {
      sd[element.sensor] = {
        slug: element.sensor,
        value: element.value,
        time: new Date(element.time),
      };
    }
  });
  return sd;
};

export const getAqiData = async () => {
  // Server Replica
  let aqi = [];
  let data = {};
  Array.from({ length: 35 }, () => {
    aqi.push(Math.round(Math.random() * 10), 2);
    return null;
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
