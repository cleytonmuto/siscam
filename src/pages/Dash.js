import React from 'react'
import {Chart} from 'react-google-charts';

const Dash = () => {
  return (
    <Chart
      chartType='ScatterChart'
      data={[['Age', 'Weight'], [-4, 16], [8, 6]]}
      width='100%'
      height='800px'
      legendToggle
    />
  );
}

export default Dash;
