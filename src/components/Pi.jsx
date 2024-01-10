
import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'

export default function Pi({angle}) {
    const data = [
        { name: 'Group A', value: 100 },
       
      ];
  return (
         <PieChart width={100} height={100} >
        <Pie

          data = {data}
          innerRadius={20}
          startAngle = {angle}
          endAngle = {0}
          outerRadius = {30}
          fill="#8884d8"
          paddingAngle={20}
          dataKey="value"
          cx= '50%'
          cy = '60%'
        >
        
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill= '#00C49F' />
          ))}
        </Pie>
        

      </PieChart>
  )
}
