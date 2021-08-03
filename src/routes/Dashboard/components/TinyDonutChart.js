import React from 'react';
import PropTypes from 'prop-types';
import {
    PieChart,
    Pie,
    Cell
} from '../../../components/recharts';


const TinyDonutChart = (props) => {
    const data = [
        {name: 'Value', value: props.value},
        {name: 'Remaining', value: props.max-props.value}
    ];
    return (
        <PieChart width={80} height={80}>
            <Pie
                data={data}
                dataKey="value"
                stroke={props.strokeColor}
                innerRadius={28}
                outerRadius={35}
                fill="#E9ECEF"
            >
                <Cell fill={props.pieColor}/>
            </Pie>
        </PieChart>
    )
};

TinyDonutChart.propTypes = {
    pieColor: PropTypes.string,
    strokeColor: PropTypes.string,
    pieBg: PropTypes.string,
    value: PropTypes.number,
    max: PropTypes.number
};
TinyDonutChart.defaultProps = {
    pieColor: "primary",
    strokeColor: "white",
    pieBg: "200",
    value: 0,
    max: 100
};

export {TinyDonutChart};
