import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from './data';



export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render() {
    return (
      <div className = 'w-full md:w-[600px] '>
        
      <ResponsiveContainer  width= '100%' height= {300}>
        <BarChart
          width={100}
          height={100}
          data={data}
          margin = {{
            top : 10,
            left : 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Employer" stackId="a" fill="#00226C" />
          <Bar dataKey="Employee" stackId="a" fill="#0450C2" />
          <Bar dataKey="Total Interest" stackId="a" fill="#0073DC" />
        </BarChart>
      </ResponsiveContainer>
      
      </div>
    );
  }
}
