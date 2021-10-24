import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { parseJSON, getWeek } from 'date-fns'

import { SensorDataCollection, sensors } from "./constants";
import { getData, getAqiData } from "./backend";

export const counterAtom = atom({});
export const timerAtom = atom({ timer: null, count: 0 });
export const loadedAtom = atom(false);
export const aqiLoadedAtom = atom(false);
export const aqiDataAtom = atom<AqiDataType>({});

interface AqiDataType {
  [key: number]: {
    value: number[];
  };
}

type shType = {
  time: Date[];
  CO: number[];
  H2S: number[];
  SO2: number[];
  NO2: number[];
  O3: number[];
  CH4: number[];
  NH3: number[];
  CO2: number[];
  PM1_0: number[];
  PM2_5: number[];
  PM10: number[];
  H: number[];
  T: number[];
};

export const sensorHistoryAtom = atom<shType>({
  time: [],
  CO: [],
  H2S: [],
  SO2: [],
  NO2: [],
  O3: [],
  CH4: [],
  NH3: [],
  CO2: [],
  PM1_0: [],
  PM2_5: [],
  PM10: [],
  H: [],
  T: [],
});

/**
 *  Function to fetch sensor data from backend and store it into Jotai Global State. Should be called only once.
 */
export function useBackEndCalls() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sensorReadings, setSensorReadings] = useAtom(counterAtom);
  const [sensorHistory, setSensorHistory] = useAtom(sensorHistoryAtom);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setLoaded] = useAtom(loadedAtom);

  useEffect(() => {
    const val = setInterval(() => {
      async function asyncinsideuseeffect() {
        const data = await getData();
        setSensorReadings(data);
      }
      asyncinsideuseeffect();
    }, 10000);

    return () => {
      clearInterval(val);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Confirm Data exists. Then only set Loaded is true
  useEffect(() => {
    if (sensorReadings[sensors[0]]) {
      setLoaded(true);
      addValuesToSensorHistory(sensorReadings, sensorHistory, setSensorHistory);
    } else setLoaded(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sensorReadings]);
}

const addValuesToSensorHistory = (
  data: SensorDataCollection,
  sensorHistory,
  setSensorHistory
) => {
  let time: Date = new Date("01 Jan 1970 00:00:00 GMT");
  let sh = sensorHistory ? { ...sensorHistory } : {};
  sensors.forEach((element) => {
    // const element = slugval.replace(".", "_");
    if (data[element]) {
      // Catch Latest Time Stamp from the array.
      const date = parseJSON(data[element].time);
      if (time < date) {
        time = date;
      }

      if (!sh[element]) {
        sh[element] = [];
      }
      // Fill zero if element is missing. Else data will get miss aligned in charts.
      if (data[element]?.value) {
        sh[element].push(data[element]?.value);
      } else {
        sh[element].push(0);
      }
    }
  });

  sh.time.push(time);
  console.log("Final Sensor History", sh);

  setSensorHistory(sh);
};

export const useAQIbackendCalls = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [aqiLoaded, setAqiLoaded] = useAtom(aqiLoadedAtom);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [aqiData, setAqiData] = useAtom(aqiDataAtom);

  useEffect(() => {
    getAqiData().then(({ date, value }: { date: Date[]; value: number[] }) => {
      let weeklyOrderedObject = {};
      // console.log(value)

      date.forEach((d, i) => {
        const weeknum = getWeek(d);

        if (!weeklyOrderedObject[weeknum]) {
          weeklyOrderedObject[weeknum] = [];
        }
        // weeklyOrderedObject[weeknum]?.date.push(d);
        weeklyOrderedObject[weeknum][d.getDay()] = value[i];
      });
      setAqiData(weeklyOrderedObject);
      setAqiLoaded(true);
    });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
