import React from 'react';
import { useCalculator } from './CalculatorContext';

const ResultsPanel = () => {
  const { state } = useCalculator();

  const {
    totalEmployees,
    medCost,
    lifestyleCost,
    bmiThreshold
  } = state;

  // Assumptions (to be refined with validated model)
  const uptakeRate = bmiThreshold === "40" ? 0.03 : bmiThreshold === "27" ? 0.08 : 0.05;
  const expectedUtilizers = Math.round(totalEmployees * uptakeRate);
  const totalMonthlyCost = (medCost + lifestyleCost) * expectedUtilizers;
  const pmpm = (totalMonthlyCost / totalEmployees).toFixed(2);

  // Mock ROI formula: total benefit over 5 years vs. total cost (to refine)
  const savingsPerUtilizerPerYear = 2800;
  const totalSavings5Yr = expectedUtilizers * savingsPerUtilizerPerYear * 5;
  const totalCost5Yr = (medCost + lifestyleCost) * expectedUtilizers * 12 * 5;
  const roi = totalCost5Yr > 0 ? (totalSavings5Yr / totalCost5Yr).toFixed(1) : '0';

  const breakevenMonth = roi !== '0' ? Math.min(Math.round((totalCost5Yr / totalSavings5Yr) * 60), 60) : 60;

  return (
    <div className="bg-white shadow rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Projected Results</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded-md bg-gray-50">
          <p className="text-sm text-gray-500">PMPM Cost</p>
          <p className="text-lg font-semibold">${pmpm}</p>
        </div>
        <div className="p-4 border rounded-md bg-gray-50">
          <p className="text-sm text-gray-500">5-Year ROI</p>
          <p className="text-lg font-semibold">{roi}x</p>
        </div>
        <div className="p-4 border rounded-md bg-gray-50">
          <p className="text-sm text-gray-500">Breakeven Month</p>
          <p className="text-lg font-semibold">Month {breakevenMonth}</p>
        </div>
        <div className="p-4 border rounded-md bg-gray-50">
          <p className="text-sm text-gray-500">Expected Utilizers</p>
          <p className="text-lg font-semibold">{expectedUtilizers}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPanel;