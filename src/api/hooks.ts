import { getData } from "./backend";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { sensors } from "./constants";

export const counterAtom = atom({});
export const timerAtom = atom({ timer: null, count: 0 });
export const loadedAtom = atom(false);

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

export function useBackEndCalls() {
  const [sensorReadings, setSensorReadings] = useAtom(counterAtom);
  const [sensorHistory, setSensorHistory] = useAtom(sensorHistoryAtom);
  const [timer, setTimer] = useAtom(timerAtom);
  const [loaded, setLoaded] = useAtom(loadedAtom);

  useEffect(() => {
    let lap = { ...timer };
    lap.count += 1;
    setTimer(lap);

    if (lap.count <= 1) {
      const val = setInterval(() => {
        getData()
          .then((data) => {
            setSensorReadings(data);
            setLoaded(true);
            addValuesToSensorHistory<SensorData>(
              data as SensorData[],
              sensorHistory,
              setSensorHistory
            );
          })
          .catch((reason) => {
            // TODO: API Error
          });
      }, 10000);
      setTimer({ timer: val, count: timer.count });
    }
    return () => {
      let lap = { ...timer };
      lap.count -= 1;
      if (lap.count <= 0) {
        clearInterval(lap.timer);
        setTimer({ count: 0, timer: null });
      } else {
        setTimer(lap);
      }
    };
  }, []);
}

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
const addValuesToSensorHistory = <T>(
  data: T[],
  sensorHistory,
  setSensorHistory
) => {
  let time: Date = new Date("01 Jan 1970 00:00:00 GMT");
  let sh = { ...sensorHistory };

  sensors.forEach((element) => {

    // Catch Latest Time Stamp from the array.
    const date = new Date(data[element].time)
    if (time < date) {
      time = date;
    }

    //  Convert . to _ for Slug. Periods cannot be used in object names
    const slug = element.replace(".", "_");

    // Fill zero if element is missing. Else data will get miss aligned in charts.
    if (data[element]) {
      sh[slug].push(data[element].value);
    } else {
      sh[slug].push(0);
    }
  });

  sh.time.push(time);

  setSensorHistory(sh);
};
