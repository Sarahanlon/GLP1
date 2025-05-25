import React from 'react';
import { useCalculator } from './CalculatorContext';

const EligibilityForm = () => {
  const { state, dispatch } = useCalculator();

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Eligibility Criteria</h2>
      <label className="block mb-2">
        <span className="text-sm font-medium">Total Employees</span>
        <input
          type="number"
          value={state.totalEmployees}
          onChange={(e) => dispatch({ type: 'SET_EMPLOYEES', payload: parseInt(e.target.value, 10) || 0 })}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="e.g. 1000"
        />
      </label>
      <label className="block mb-2">
        <span className="text-sm font-medium">BMI Coverage Threshold</span>
        <select
          value={state.bmiThreshold}
          onChange={(e) => dispatch({ type: 'SET_BMI_THRESHOLD', payload: e.target.value })}
          className="w-full mt-1 p-2 border rounded-md"
        >
          <option value="30">BMI ≥ 30</option>
          <option value="27">BMI ≥ 27 + Comorbidities</option>
          <option value="35">BMI ≥ 35</option>
          <option value="40">BMI ≥ 40</option>
        </select>
      </label>
    </div>
  );
};

export default EligibilityForm;