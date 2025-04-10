
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Jan', systolic: 135, diastolic: 85 },
  { name: 'Feb', systolic: 132, diastolic: 83 },
  { name: 'Mar', systolic: 130, diastolic: 80 },
  { name: 'Apr', systolic: 125, diastolic: 78 },
  { name: 'May', systolic: 122, diastolic: 76 },
  { name: 'Jun', systolic: 120, diastolic: 75 },
];

const HealthChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Pressure Trends</CardTitle>
        <CardDescription>Monthly average readings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#4A86E8"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#39A9B5"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthChart;
