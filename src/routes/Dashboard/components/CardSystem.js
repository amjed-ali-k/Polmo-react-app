import React from 'react';
import PropTypes from 'prop-types';

import {  
    Card, 
    CardBody,
    Badge
} from './../../../components';

import {
    TinyDonutChart
} from "./TinyDonutChart"
import {
    TinyBarChart
} from "./TinyBarChart"

import { randomArray } from '../../../utilities';
import {Col} from "../../../components/FloatGrid/Col";

const percents = [
    "15",
    "25",
    "30",
    "35",
    "40",
    "45",
    "55",
    "60",
    "75",
    "80",
    "95"
];

const caret = [
    "down",
    "up"
];

const CardSystem = (props) => {
    let caret = 'down';
    let badge = 'light'
    if (parseInt(props.sensor.value[0]) > parseInt(props.sensor.value[1])){
        caret = 'up'
        badge = 'danger'
    }
    if (parseInt(props.sensor.value[0]) < parseInt(props.sensor.value[1])){
        badge = 'success'
    }

    return(
    <Card className="mb-3 mb-lg-0">
       <CardBody className="pb-0">
           <div className="d-flex">
               <span>
                    <Badge pill className="mb-3" color={badge} >
                        <i className={` fa fa-fw fa-caret-${ caret }`} />
                        { Math.abs(props.sensor.value[0] - props.sensor.value[1]) } {props.sensor.settings.unit}
                    </Badge>
                    <h6 className="mb-0">
                        { props.sensor.shortname }
                    </h6>
                    <h2 className="mb-3">
                        { props.sensor.value[0]} <small>{ props.sensor.settings.unit }</small>
                    </h2>
                </span>
                <span className="text-right ml-auto">
                    <TinyDonutChart 
                        pieColor={props.pieColor}
                        value={parseInt(props.sensor.value[0])}
                        max={parseInt(props.sensor.settings.max)}
                    />
                </span>
            </div>
            <TinyBarChart max={props.graphmax} value={props.sensor.value} />
       </CardBody>
    </Card>

)};

CardSystem.propTypes = {
    title: PropTypes.node,
    badgeColor: PropTypes.string,
    unit: PropTypes.node,
    pieColor: PropTypes.string
};
CardSystem.defaultProps = {
    title: "Waiting...",
    badgeColor: "secondary",
    unit: "%",
    pieColor: "500"
};

export { CardSystem };