import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

const data = [
  { name: 'Semaglutide', weightLoss: 9.5 },
  { name: 'Tirzepatide', weightLoss: 15 },
  { name: 'Liraglutide', weightLoss: 6.5 },
];

const WeightLossChart = () => (
  <div className="mt-6">
    <h3 className="text-md font-semibold mb-2">Estimated Weight Loss by Medication (1 Year)</h3>
    <div className="bg-white shadow rounded-lg p-4">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit="%" />
          <Tooltip />
          <Bar dataKey="weightLoss" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default WeightLossChart;