import React from 'react';
import { useCalculator } from './CalculatorContext';

const AvoidedCostPanel = () => {
  const { state } = useCalculator();
  const { totalEmployees, bmiThreshold } = state;

  const uptakeRate = bmiThreshold === "40" ? 0.03 : bmiThreshold === "27" ? 0.08 : 0.05;
  const expectedUtilizers = Math.round(totalEmployees * uptakeRate);

  const savings = {
    diabetes: 4000,
    heartDisease: 9500,
    hypertension: 2000
  };

  const totalAvoided = {
    diabetes: expectedUtilizers * savings.diabetes,
    heartDisease: expectedUtilizers * savings.heartDisease,
    hypertension: expectedUtilizers * savings.hypertension
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Avoided Condition Costs (Est. 1 Year)</h3>
      <div className="bg-white shadow rounded-lg p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-800">
        <div className="p-3 border rounded-md bg-gray-50 min-h-[100px]">
          <p className="text-gray-500">Type 2 Diabetes</p>
          <p className="font-semibold text-lg">${totalAvoided.diabetes.toLocaleString()}</p>
        </div>
        <div className="p-3 border rounded-md bg-gray-50 min-h-[100px]">
          <p className="text-gray-500">Heart Disease</p>
          <p className="font-semibold text-lg">${totalAvoided.heartDisease.toLocaleString()}</p>
        </div>
        <div className="p-3 border rounded-md bg-gray-50 min-h-[100px]">
          <p className="text-gray-500">Hypertension</p>
          <p className="font-semibold text-lg">${totalAvoided.hypertension.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default AvoidedCostPanel;