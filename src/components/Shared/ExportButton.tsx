import React from 'react';
import { useCalculator } from '../Calculator/CalculatorContext';
import { generatePdfReport } from '../../utils/pdfGenerator';

const ExportButton = () => {
  const { state } = useCalculator();

  const getDerivedResults = () => {
    const { totalEmployees, bmiThreshold, medCost, lifestyleCost } = state;
    const uptakeRate = bmiThreshold === "40" ? 0.03 : bmiThreshold === "27" ? 0.08 : 0.05;
    const utilizers = Math.round(totalEmployees * uptakeRate);
    const totalMonthly = (medCost + lifestyleCost) * utilizers;
    const pmpm = (totalMonthly / totalEmployees).toFixed(2);
    const savingsPerUtilizer = 2800;
    const totalSavings5Yr = utilizers * savingsPerUtilizer * 5;
    const totalCost5Yr = (medCost + lifestyleCost) * utilizers * 12 * 5;
    const roi = totalCost5Yr > 0 ? (totalSavings5Yr / totalCost5Yr).toFixed(1) : '0';
    const breakeven = roi !== '0' ? Math.min(Math.round((totalCost5Yr / totalSavings5Yr) * 60), 60) : 60;

    const avoided = {
      diabetes: utilizers * 4000,
      heartDisease: utilizers * 9500,
      hypertension: utilizers * 2000
    };

    return {
      utilizers,
      pmpm,
      roi,
      breakeven,
      avoided
    };
  };

  const handleExport = () => {
    const inputs = state;
    const results = getDerivedResults();
    generatePdfReport({ inputs, results });
  };

  return (
    <button
      onClick={handleExport}
      className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
    >
      Download PDF Summary
    </button>
  );
};

export default ExportButton;