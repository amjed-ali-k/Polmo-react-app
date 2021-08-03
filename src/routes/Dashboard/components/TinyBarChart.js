import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';
import {  
    ResponsiveContainer,
    BarChart, 
    Bar
} from 'recharts';

import colors from '../../../colors';

const TinyBarChart = (props) => {
        // const data = _.times(40, (n) => ({ pv: 20+Math.random() * 100 }));
        let data = []
        _.forEach(props.value, val => {data.push({pv: val})});
        data.splice(props.max)
        return (
            <ResponsiveContainer width='100%' height={ 80 }>
                <BarChart data={data} margin={{ top: 0, bottom: 0, right: 0, left: 0 }}>
                    <Bar dataKey='pv' fill="#e9ecef" />
                </BarChart>
            </ResponsiveContainer>
        )
};

TinyBarChart.propTypes = {
    barColor: PropTypes.string
};
TinyBarChart.defaultProps = {
    barColor: "200"
};

export { TinyBarChart };
