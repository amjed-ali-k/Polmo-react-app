import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    AreaChart, 
    Area
} from 'recharts';

const TinyAreaChart = (props) => {
    let data = [];
    _.forEach(props.value, val => {data.push({pv: val})});
    data.splice(props.max);
    return (
        <ResponsiveContainer width='100%' minWidth='150px' height={ 40 }>
            <AreaChart data={data}>
                <Area dataKey='pv' stroke={  props.strokeColor } fill={props.fillColor } />
            </AreaChart>
        </ResponsiveContainer>
    )
};

TinyAreaChart.propTypes = {
    strokeColor: PropTypes.string,
    fillColor: PropTypes.string
};
TinyAreaChart.defaultProps = {
    strokeColor: "600",
    fillColor: "200",
};

export { TinyAreaChart };
