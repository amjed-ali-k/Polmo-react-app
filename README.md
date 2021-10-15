# POLMO Web UI

[![VisitWebsite](https://img.shields.io/badge/Visit-Website-a13d5e?style=social&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAixJREFUOE9Vk79rFEEUxz9vw0kQRPBHKaRQO0FJLyiC2hjQHAS9PbN38ZqITYyWnmBpLBQLJXd7ZhKJXqI2ohZiEdAq8Q8QG4s0QQu5eMjJPZmZ3c3esAw7M2/e+77v9zuCHeJmPzTZEKjrneAQ38aqLL22IemR//H3/Ac0GT9Yob1l14K6mCblM4LOVsScVU1P0io+pfhweCalWwrbkZrHaYEWZdNHi126B6ZZ7dgLLynu6jB8sYJZzsDbXDHhtKKPBJnpIW8L9I/1kQWB3UA5wpiYaFjprQiyGWFqDlMChCaXrwpBKwMoYGF7mIKqfg+Q3wonEB5EamYG6GtRuqTISo5OT0/Sj2XFV7OT3I1YqNu14wBRGloeE/SNPRe1ceroHEjg8ditm1XMXCbBvBT3DTH8BeWovyGukE2UqTuw1o0h5GQZsy1PqBUKdD8InHKXfb+JuF7ifDLXgedmNZKlosSETxG9lkU6DzjwiVlcP3nvZNwI3JOYyZG+/AsDDULQI5nJdipllvPI3MEvoB2ImryJJab0ELju2oA1Uf2q0BHYD1JLqP3UYev8DXn/d0fGxA2xls6BvAN6fXojU7zYTOVraPhR4LQKs1U19z1LmbTeNQ0u7AnY+1OFVxU1E0lex0mTcFxE26o6WpHFDSe1bS7nFZezQfhZ0NsRi2upS22oV+vP+g8OH69Lve/ga2Ll/CueJ5yYUrPsHllaJhGkxZXRSZ6vJ+I6ef8DHNju1CxiaEQAAAAASUVORK5CYII=)](https://polmo-react-app.vercel.app/)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/amjed-ali-k/Polmo-react-app/react?logo=react)
![GitHub last commit](https://img.shields.io/github/last-commit/amjed-ali-k/Polmo-react-app)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/amjed-ali-k/Polmo-react-app)

## The problem
Air pollution is a major threat to every existing life in the world even serveral meassures taken to control it. Monitoring is the first level solution for controling the pollution. [Read more about air pollution in Further readings section](#further-readings)

In india, there are several pollution monitoring stations such as AAQMS and CAAQMS. Such system needs frequent calibrations, huge initail and maintainance costs and spaces. Hence those are only implemented in critical areas. Those also takes minutes to get the readings. 

Several pollution causes is not sustaining and only exists for a few period. Identifying and monitoring such are riskier and coslty. 

## Our Solution
Polmo is an IOT based Air pollution sensing network. It consists of several node types containing different gas sensors. each node will be connected to the cloud directly or through the parent node or nodes in the chain. 

## The Plan
 The major plan was to use advanced sensor algorithms, machine learning, and predictions.

### Nodes and Purpose
According to environment and requirement, different nodes types need to be created. Popular types of nodes that under development are: 
1. Polmo Urban - ( For cities and high polluted and vulnarable areas)
2. Polmo Green - ( For Rural areas )
3. Polmo Indoor - ( For industries and indoor)

Each node is made and configured according to the specific enviornaments, major polutants. So the data accuracy, sensor type, monitoring frequency may vary among these. 

## Dashboard Preview
![Dashboard Preview](public/dashboard-preview.png)

## Installation

 This dashboard can be installed locally by cloning the repository and running install command like any react app created using `create-react-app`:

```
npm install
```

It will download all requierd `dependancies` and install them. After you can run local server using :

```
npm start
```
To build the production version of the dashboard you can simply use:
```
npm build
```

## Contribuiting
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

For maintaining the repository more neat and informative, commit messages should be proper and self informative. This repo uses `huskey`, `commitlint` and `git-emoji` configs to protect noninformative commit messages.
Every commit message should follow the format below:
```
:emoji: <type>: <Commit message>
```

## Licence
[Apache 2.0](LICENSE)


## Further Reading

- [How air pollution is destroying our health - WHO](https://www.who.int/news-room/spotlight/how-air-pollution-is-destroying-our-health)
- [Environmental and Health Impacts of Air Pollution - Frontiers](https://www.frontiersin.org/articles/10.3389/fpubh.2020.00014/full)
- [Air pollution - National Geographic](https://www.nationalgeographic.org/encyclopedia/air-pollution/)
- [Effects of Air Pollution on Agricultural Crops](http://www.omafra.gov.on.ca/english/crops/facts/01-015.htm)