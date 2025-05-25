import React from 'react';
import { useCalculator } from './CalculatorContext';

const ProgramSettings = () => {
  const { state, dispatch } = useCalculator();

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Program Design</h2>
      <label className="block mb-2">
        <span className="text-sm font-medium">Medication Cost per Month ($)</span>
        <input
          type="number"
          value={state.medCost}
          onChange={(e) => dispatch({ type: 'SET_MED_COST', payload: parseFloat(e.target.value) || 0 })}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="e.g. 775"
        />
      </label>
      <label className="block mb-2">
        <span className="text-sm font-medium">Lifestyle Program Cost PMPM ($)</span>
        <input
          type="number"
          value={state.lifestyleCost}
          onChange={(e) => dispatch({ type: 'SET_LIFESTYLE_COST', payload: parseFloat(e.target.value) || 0 })}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="e.g. 50"
        />
      </label>
    </div>
  );
};

export default ProgramSettings;