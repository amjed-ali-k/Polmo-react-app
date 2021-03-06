import {format} from 'date-fns'

export const PNodeDetails = {
  id: "752b40ba-ebc0",
  name: "PSN-Urban-CAN",
  status: "online",
  commissioned: "12-July-2021",
  address: "GEC Building, Dharmasala, Kannur - 670563, Kerala, India",
  lastUpdated: format(new Date(), 'PPPPpp'),
  upTime: "42 Days, 5 Hours, 32 Minutes",
  battery: 100,
  charging: true,
  location: "Kannur, India",
};

export type SensorType = {
  name: string;
  slug: string;
  description: string;
  sensor: {
    name: string;
    type: string;
    range: string;
  };
  settings: {
    min: number;
    max: number;
    unit: string;
  };
  test?: {
    lastValue: number;
    lastWeekValue?: number[];
    lastMonthValue?: number[];
  };
};

export const SensorDetails: SensorType[] = [
  {
    name: "Carbon Monoxide",
    slug: "CO",
    description:
      "Carbon monoxide (chemical formula CO) is a colorless, odorless, tasteless, flammable gas that is slightly less dense than air. Carbon monoxide consists of one carbon atom and one oxygen atom. It is the simplest molecule of the oxocarbon family. In coordination complexes the carbon monoxide ligand is called carbonyl.\n\nThermal combustion is the most common source of carbon monoxide, however there are numerous environmental and biological sources that generate and emit a significant amount of carbon monoxide. Humans utilize carbon monoxide for various industrial processes including synthetic chemical manufacturing and metallurgy, however it is also a problematic air pollutant arising from industrial activities. Upon emission into the atmosphere, carbon monoxide may have roles potentially affecting climate change.",
    sensor: {
      name: "TGS 5042",
      type: "Electrochemical",
      range: "0-1000ppm",
    },
    settings: {
      min: 0,
      max: 2,
      unit: "ppm",
    },
  },
  {
    name: "Hydrogen Sulphide",
    slug: "H2S",
    description:
      "Hydrogen sulfide is a chemical compound with the formula H2S. It is a colorless chalcogen hydride gas with the characteristic foul odor of rotten eggs. It is poisonous, corrosive, and flammable. Hydrogen sulfide is often produced from the microbial breakdown of organic matter in the absence of oxygen, such as in swamps and sewers; this process is commonly known as anaerobic digestion which is done by sulfate-reducing microorganisms. H2S also occurs in volcanic gases, natural gas, and in some sources of well water.",
    sensor: {
      name: "SPEC-3SP-NO2",
      type: "Electrochemical",
      range: "0-50ppm",
    },
    settings: {
      min: 0,
      max: 5,
      unit: "ppb",
    },
  },
  {
    name: "Sulphur Dioxide",
    slug: "SO2",
    description:
      "Sulfur dioxide is the chemical compound with the formula SO2. It is a toxic gas responsible for the smell of burnt matches. It is released naturally by volcanic activity and is produced as a by-product of copper extraction and the burning of fossil fuels contaminated with sulfur compounds. Sulfur dioxide has a pungent smell like nitric acid. Sulfur dioxide is a major air pollutant and has significant impacts upon human health. In addition, the concentration of sulfur dioxide in the atmosphere can influence the habitat suitability for plant communities, as well as animal life. Sulfur dioxide emissions are a precursor to acid rain and atmospheric particulates.",
    sensor: {
      name: "FECS 43-20",
      type: "Electrochemical",
      range: "0-20ppm",
    },
    settings: {
      min: 0,
      max: 1000,
      unit: "ppb",
    },
  },
  {
    name: "Nitrogen Dioxide",
    slug: "NO2",
    description:
      "Nitrogen dioxide is a chemical compound with the formula NO2. It is one of several nitrogen oxides. NO2 is an intermediate in the industrial synthesis of nitric acid, millions of tons of which are produced each year for use primarily in the production of fertilizers. At higher temperatures it is a reddish-brown gas. It can be fatal if inhaled in large quantity. Even small day-to-day variations in NO2 can cause changes in lung function. Chronic exposure to NO2 can cause respiratory effects including airway inflammation in healthy people and increased respiratory symptoms in people with asthma. Interaction of NO2 and other NOx with water, oxygen and other chemicals in the atmosphere can form acid rain which harms sensitive ecosystems such as lakes and forests.Elevated levels of NO2 can also harm vegetation, decreasing growth, and reduce crop yields",
    sensor: {
      name: "SPEC-3SP-NO2",
      type: "Electrochemical",
      range: "0-5ppm",
    },
    settings: {
      min: 0,
      max: 100,
      unit: "ppb",
    },
  },
  {
    name: "Ozone",
    slug: "O3",
    description:
      "Ozone, or trioxygen, is an inorganic molecule with the chemical formula O3. It is a pale blue gas with a distinctively pungent smell. It is an allotrope of oxygen that is much less stable than the diatomic allotrope O2, breaking down in the lower atmosphere to O2 (dioxygen). Ozone is formed from dioxygen by the action of ultraviolet (UV) light and electrical discharges within the Earth's atmosphere. Acute ozone exposure ranges from hours to a few days. Because ozone is a gas, it directly affects the lungs and the entire respiratory system. Inhaled ozone causes inflammation and acute???but reversible???changes in lung function, as well as airway hyperresponsiveness. ",
    sensor: {
      name: "MQ 131",
      type: "Metal Oxide",
      range: "0-1000ppb",
    },
    settings: {
      min: 0,
      max: 20,
      unit: "ppb",
    },
  },
  {
    name: "Methane",
    slug: "CH4",
    description:
      "Methane is a chemical compound with the chemical formula CH4. Naturally occurring methane is found both below ground and under the seafloor and is formed by both geological and biological processes. The Earth's atmospheric methane concentration has increased by about 150% since 1750, and it accounts for 20% of the total radiative forcing from all of the long-lived and globally mixed greenhouse gases (these gases don't include water vapor which is by far the largest component of the greenhouse effect)",
    sensor: {
      name: "TGS 2600",
      type: "Metal Oxide",
      range: "0-30ppm",
    },
    settings: {
      min: 0,
      max: 5,
      unit: "ppm",
    },
  },
  {
    name: "Ammonia",
    slug: "NH3",
    description:
      "A stable binary hydride, and the simplest pnictogen hydride, ammonia is a colourless gas with a distinct characteristic of a pungent smell. It is a common nitrogenous waste, particularly among aquatic organisms, and it contributes significantly to the nutritional needs of terrestrial organisms by serving as a precursor to food and fertilizers. Ammonia, either directly or indirectly, is also a building block for the synthesis of many pharmaceutical products and is used in many commercial cleaning products. It is mainly collected by downward displacement of both air and water.",
    sensor: {
      name: "TGS 2602",
      type: "Metal Oxide",
      range: "0-30ppm",
    },
    settings: {
      min: 0,
      max: 5,
      unit: "ppm",
    },
  },
  {
    name: "Carbon Dioxide",
    slug: "CO2",
    description:
      "Carbon dioxide is an acidic colorless gas with a density about 53% higher than that of dry air. Carbon dioxide molecules consist of a carbon atom covalently double bonded to two oxygen atoms. It occurs naturally in Earth's atmosphere as a trace gas. The current concentration is about 0.04% (412 ppm) by volume, having risen from pre-industrial levels of 280 ppm. Carbon dioxide is the most significant long-lived greenhouse gas in Earth's atmosphere. Since the Industrial Revolution anthropogenic emissions ??? primarily from use of fossil fuels and deforestation ??? have rapidly increased its concentration in the atmosphere, leading to global warming. Carbon dioxide also causes ocean acidification because it dissolves in water to form carbonic acid.",
    sensor: {
      name: "MQ811",
      type: "Metal Oxide",
      range: "350-10000ppm",
    },
    settings: {
      min: 0,
      max: 600,
      unit: "ppm",
    },
  },
  {
    name: "Particulate Matters",
    slug: "PM1.0",
    description:
      "Particulates ??? also known as atmospheric aerosol particles, atmospheric particulate matter, particulate matter (PM), or suspended particulate matter (SPM) ??? are microscopic particles of solid or liquid matter suspended in the air. The term aerosol commonly refers to the particulate/air mixture, as opposed to the particulate matter alone. Sources of particulate matter can be natural or anthropogenic. They have impacts on climate and precipitation that adversely affect human health, in ways additional to direct inhalation. The size of the particle is the main determinant of where in the respiratory tract the particle will come to rest when inhaled. Larger particles are generally filtered in the nose and throat via cilia and mucus, but particulate matter smaller than about 10 micrometers, can settle in the bronchi and lungs and cause health problems. Particulate matter can clog stomatal openings of plants and interfere with photosynthesis functions. In this manner, high particulate matter concentrations in the atmosphere can lead to growth stunting or mortality in some plant species.",
    sensor: {
      name: "PMS5003",
      type: "Optical scattering",
      range: "0-500ug/m3",
    },
    settings: {
      min: 0,
      max: 200,
      unit: "ug/m3",
    },
  },
  {
    name: "Particulate Matters",
    slug: "PM2.5",
    description:
      "Particulates ??? also known as atmospheric aerosol particles, atmospheric particulate matter, particulate matter (PM), or suspended particulate matter (SPM) ??? are microscopic particles of solid or liquid matter suspended in the air. The term aerosol commonly refers to the particulate/air mixture, as opposed to the particulate matter alone. Sources of particulate matter can be natural or anthropogenic. They have impacts on climate and precipitation that adversely affect human health, in ways additional to direct inhalation. The size of the particle is the main determinant of where in the respiratory tract the particle will come to rest when inhaled. Larger particles are generally filtered in the nose and throat via cilia and mucus, but particulate matter smaller than about 10 micrometers, can settle in the bronchi and lungs and cause health problems. Particulate matter can clog stomatal openings of plants and interfere with photosynthesis functions. In this manner, high particulate matter concentrations in the atmosphere can lead to growth stunting or mortality in some plant species.",
    sensor: {
      name: "PMS5003",
      type: "Optical scattering",
      range: "0-500ug/m3",
    },
    settings: {
      min: 0,
      max: 200,
      unit: "ug/m3",
    },
  },
  {
    name: "Particulate Matters",
    slug: "PM10",
    description:
      "Particulates ??? also known as atmospheric aerosol particles, atmospheric particulate matter, particulate matter (PM), or suspended particulate matter (SPM) ??? are microscopic particles of solid or liquid matter suspended in the air. The term aerosol commonly refers to the particulate/air mixture, as opposed to the particulate matter alone. Sources of particulate matter can be natural or anthropogenic. They have impacts on climate and precipitation that adversely affect human health, in ways additional to direct inhalation. The size of the particle is the main determinant of where in the respiratory tract the particle will come to rest when inhaled. Larger particles are generally filtered in the nose and throat via cilia and mucus, but particulate matter smaller than about 10 micrometers, can settle in the bronchi and lungs and cause health problems. Particulate matter can clog stomatal openings of plants and interfere with photosynthesis functions. In this manner, high particulate matter concentrations in the atmosphere can lead to growth stunting or mortality in some plant species.",
    sensor: {
      name: "PMS5003",
      type: "Optical scattering",
      range: "0-500ug/m3",
    },
    settings: {
      min: 0,
      max: 200,
      unit: "ug/m3",
    },
  },
  {
    name: "Humidity",
    slug: "Humidity",
    description:
      "Humidity is the concentration of water vapour present in the air. Water vapor, the gaseous state of water, is generally invisible to the human eye. Humidity indicates the likelihood for precipitation, dew, or fog to be present. Humidity depends on the temperature and pressure of the system of interest. The same amount of water vapor results in higher humidity in cool air than warm air. A related parameter is the dew point. The amount of water vapor needed to achieve saturation increases as the temperature increases. As the temperature of a parcel of air decreases it will eventually reach the saturation point without adding or losing water mass",
    sensor: {
      name: "DHT 11",
      type: "Semiconductor",
      range: "20% to 90%",
    },
    settings: {
      min: 0,
      max: 100,
      unit: "%",
    },
  },
  {
    name: "Temperature",
    slug: "Temperature",
    description:
      "Temperature is a physical quantity that expresses hot and cold. It is the manifestation of thermal energy, present in all matter, which is the source of the occurrence of heat, a flow of energy, when a body is in contact with another that is colder or hotter.",
    sensor: {
      name: "TC1047",
      type: "Semiconductor",
      range: "-40???C to +125??? C",
    },
    settings: {
      min: 0,
      max: 100,
      unit: "???C",
    },
  },
];

export const sensors = [
  "CO",
  "H2S",
  "SO2",
  "NO2",
  "O3",
  "CH4",
  "NH3",
  "CO2",
  "PM10",
  "PM1.0",
  "PM2.5",
  "Humidity",
  "Temperature",
];

export interface ServerData {
  sensor: string;
  time: string;
  value: number;
}

export interface SensorData {
  time: string;
  value: number;
  slug: string;
}

export type SensorDataCollection = {
  [key: string]: SensorData;
};
