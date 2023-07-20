import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
    let dataPointValues = props.dataPoints.map((dataPoint) => {
        return dataPoint.value
    })
    let maxDataPointsValue = Math.max(...dataPointValues);
    return <div className='chart'>
        {
            props.dataPoints.map((dataPoint) => {
                return <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxDataPointsValue}
                    label={dataPoint.label}
                ></ChartBar>
            })
        }
    </div>
}

export default Chart;