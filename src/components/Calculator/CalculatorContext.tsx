import React, { createContext, useReducer, useContext, ReactNode } from 'react';

type CalculatorState = {
  totalEmployees: number;
  bmiThreshold: string;
  medCost: number;
  lifestyleCost: number;
};

type CalculatorAction =
  | { type: 'SET_EMPLOYEES'; payload: number }
  | { type: 'SET_BMI_THRESHOLD'; payload: string }
  | { type: 'SET_MED_COST'; payload: number }
  | { type: 'SET_LIFESTYLE_COST'; payload: number };

const initialState: CalculatorState = {
  totalEmployees: 1000,
  bmiThreshold: '30',
  medCost: 775,
  lifestyleCost: 50,
};

function calculatorReducer(state: CalculatorState, action: CalculatorAction): CalculatorState {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return { ...state, totalEmployees: action.payload };
    case 'SET_BMI_THRESHOLD':
      return { ...state, bmiThreshold: action.payload };
    case 'SET_MED_COST':
      return { ...state, medCost: action.payload };
    case 'SET_LIFESTYLE_COST':
      return { ...state, lifestyleCost: action.payload };
    default:
      return state;
  }
}

const CalculatorContext = createContext<{
  state: CalculatorState;
  dispatch: React.Dispatch<CalculatorAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);