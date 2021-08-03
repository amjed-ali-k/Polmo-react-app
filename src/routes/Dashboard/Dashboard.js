import React from 'react';
import faker from 'faker/locale/en_US';
import {
    Container,
    Row,
    Table,
    Col
} from './../../components';

import { HeaderMain } from "../components/HeaderMain";
import { CardSystem } from "./components/CardSystem"
import { TrSystem } from "./components/trSystem"
import {getSensorLastData, getSensorList} from "../../services/backendcalls";
import _ from "lodash";

const TrColors =  [
        {
            fill: "primary-02",
            stroke: "primary"
        },
        {
            fill: "purple-02",
            stroke: "purple"
        },
        {
            fill: "success-02",
            stroke: "success"
        },
        {
            fill: "yellow-02",
            stroke: "yellow"
        }
    ]
const ColorArr = [
    "dark",
    "blue",
    "indigo",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "cyan",
]
const historylimit = 200;
const bottomgraphmax = 200;
const cardmax = 40;
class Dashboard extends React.Component {

    state = {
        sensors: {}
    }

    // async fetch data function
    fetchSensorValue = async () => {
        const res = await getSensorLastData();
        return res.data;
    }

    fetchSensorLists = async () => {
        const res = await getSensorList();
        const st = {...this.state};
        st.sensors = res.data;
        _.forOwn(st.sensors, function(value, key) {
            st.sensors[key].value = []
            for (let step = 0; step < historylimit; step++) {
                st.sensors[key].value.push(0);
            }
            const date = new Date()
            st.sensors[key].lastupdated = date.toISOString()
        } );
        this.setState(st);
    }

    updateSensorValues = async () => {
        let data = await this.fetchSensorValue();
        const st = {...this.state};
        _.map(data, (reading) => {
            let v  = st.sensors[reading.sensor];
            if(v) {
                v.value.unshift(reading.value);
                v.lastupdated = reading.time;
                if (v.value.length < historylimit) {
                    for (let step = 0; step < historylimit; step++) {
                        v.value.push(0);
                    }
                }
                while(v.value.length !== historylimit){
                    v.value.pop();
                }

            }
            st.sensors[reading.sensor] = v;
        })
        this.setState(st);
        console.clear();
        console.log(this.state);
    }

    getSensorArray = () => {
        let arr = [];
        _.forOwn(this.state.sensors, function(value, key) {
            let i = value;
            i.shortname = key;
            arr.push(i);
        } );
        return arr;
    }

    componentDidMount = async () => {
        // Get sensor list
        await this.fetchSensorLists();
        // Get Sensor Values
        await this.updateSensorValues()
        // Set interval.
        this.interval = setInterval(async () => await this.updateSensorValues(), 10000);
    }

    componentWillUnmount() {
        // Remove interval task
        clearInterval(this.interval);
    }

    render(){
        const cards = this.getSensorArray();
        return (
        <Container>
            <Row className="mb-5">
                <Col lg={ 12 }>
                    <HeaderMain
                        title="Realtime Data"
                        className="mb-4 mb-lg-5"
                    />
                </Col>
                { cards.map( (item , index) => {
                    return(
                        <Col lg={ 3 } md={ 6 } className={"mb-3"}>
                        <CardSystem
                        badgeColor={ColorArr[index]}
                        pieColor={ColorArr[index]}
                        sensor={item}
                        graphmax={cardmax}
                    />
                        </Col>
                    )
                } ) }


                <Col lg={ 12 }>
                    <h3 className="mt-5">Realtime chart</h3>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>Sensor Name</th>
                            <th>Chart</th>
                        </tr>
                        </thead>
                        <tbody>
                        { _.map(cards, (sensor, index) => (
                            <TrSystem
                                sensor={sensor}
                                color={ColorArr[index]}
                                graphmax={bottomgraphmax}
                            />
                        ))
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Dashboard;