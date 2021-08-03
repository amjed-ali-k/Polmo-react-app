import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {  
    Progress,
    Badge
} from './../../../components';

import {
    TinyAreaChart
} from "./TinyAreaChart"

import { randomArray } from '../../../utilities';

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

const versions = [
    "1.10",
    "1.34",
    "2.35",
    "0.23",
    "2.90",
    "9.05"
];

const name = [
    "Apache",
    "Postfix",
    "Ruby R1",
    "MySQL",
    "Ruby R2"
];

const gbLeft = [
    "2,234",
    "6,738",
    "982",
    "9,001",
    "1,329"
];

const tdValue = [
    "783",
    "45",
    "4",
    "190",
    "65"
];

const tdUnits = [
    "",
    "Mb",
    "%",
    "Kb/s"
];

const TrSystem = (props) => {
    const percent = Math.abs((props.sensor.value[0]/props.sensor.settings.max)*100);

   return (
        <tr>
            <td style={{width: '20%'}}>
            <span className="d-flex mb-2">
                <h6 className="mb-0 mr-5">
                    {props.sensor.name}
                </h6>
                <Badge pill className="ml-auto align-self-center">
                    {props.sensor.shortname}
                </Badge>
            </span>
                <Progress value={percent} style={{height: "4px"}} className="mb-2"/>
                <span className="d-flex">
                <span className="text-inverse">
                    {props.sensor.value[0]}
                </span>
                <span className="ml-auto text-right">
                   {props.sensor.settings.unit}
                </span>
            </span>
            </td>
           <td style={{width: '80%'}}>
                        <TinyAreaChart
                            strokeColor={"primary"}
                            fillColor={"lightblue"}
                            value={props.sensor.value}
                            max={props.graphmax}
                        />
           </td>

        </tr>
    )
};

TrSystem.propTypes = {
     sensor : PropTypes.node
};
TrSystem.defaultProps = {

};

export { TrSystem };
