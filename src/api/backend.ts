import { sensors } from "./constants";

export const getData = async () => {
  let data = {};
  await setTimeout(() => {}, 5000);
  sensors.forEach((element) => {
    data[element] = {
      slug: element,
      value: Math.round(Math.random() * 100),
      time: new Date().toISOString(),
    };
  });
  return data;
};

export const getAqiData = async () => {
  // Server Replica
  let aqi = [];
  let data = {};
  Array.from({ length: 35 }, () => {
    aqi.push(Math.round(Math.random() * 10), 2);
  });
  aqi.map((val, index) => {
    var d = new Date();
    d.setDate(d.getDate() - index);
    data[`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`] = val;
  });

  // Create Seperate arrays for chart js
  let date = [];
  let value = [];
  var dateArr = Object.keys(data);
  date = dateArr.map((item) => {
    value.push(aqi[item]);
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
