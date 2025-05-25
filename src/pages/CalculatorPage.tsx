import React from 'react';
import EligibilityForm from '../components/Calculator/EligibilityForm';
import ProgramSettings from '../components/Calculator/ProgramSettings';
import ResultsPanel from '../components/Calculator/ResultsPanel';
import WeightLossChart from '../components/Charts/WeightLossChart';
import MethodologySection from '../components/Shared/MethodologySection';
import ExportButton from '../components/Shared/ExportButton';
import { CalculatorProvider } from '../components/Calculator/CalculatorContext';

const CalculatorPage = () => {
  return (
    <CalculatorProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        <div>
          <EligibilityForm />
          <ProgramSettings />
        </div>
        <div>
          <ResultsPanel />
          <WeightLossChart />
          <ExportButton />
          <MethodologySection />
        </div>
      </div>
    </CalculatorProvider>
  );
};

export default CalculatorPage;