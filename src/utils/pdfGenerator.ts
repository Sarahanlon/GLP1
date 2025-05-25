import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

type CalculatorInputs = {
  totalEmployees: number;
  bmiThreshold: string;
  medCost: number;
  lifestyleCost: number;
};

type AvoidedCosts = {
  diabetes: number;
  heartDisease: number;
  hypertension: number;
};

type CalculatorResults = {
  utilizers: number;
  pmpm: string;
  roi: string;
  breakeven: number;
  avoided: AvoidedCosts;
};

export function generatePdfReport({
  inputs,
  results
}: {
  inputs: CalculatorInputs;
  results: CalculatorResults;
}) {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text('GLP-1 ROI Calculator Summary', 105, 15, { align: 'center' });

  doc.setFontSize(12);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 25);

  autoTable(doc, {
    startY: 35,
    head: [['Category', 'Value']],
    body: [
      ['Total Employees', inputs.totalEmployees.toString()],
      ['BMI Threshold', `BMI ≥ ${inputs.bmiThreshold}`],
      ['Medication Cost ($/mo)', `$${inputs.medCost}`],
      ['Lifestyle Program Cost PMPM ($)', `$${inputs.lifestyleCost}`],
      ['Expected Utilizers', results.utilizers.toString()],
      ['PMPM Cost', `$${results.pmpm}`],
      ['5-Year ROI', `${results.roi}x`],
      ['Breakeven Month', `Month ${results.breakeven}`],
      ['Avoided Cost - Diabetes', `$${results.avoided.diabetes.toLocaleString()}`],
      ['Avoided Cost - Heart Disease', `$${results.avoided.heartDisease.toLocaleString()}`],
      ['Avoided Cost - Hypertension', `$${results.avoided.hypertension.toLocaleString()}`]
    ]
  });

  doc.addPage();
  doc.setFontSize(14);
  doc.text('Methodology Summary', 14, 20);
  doc.setFontSize(11);
  doc.text(
    `This report reflects the projected impact of offering GLP-1 medications within an employer-sponsored health plan. 
Inputs are fully customizable, and calculations are based on current evidence from commercial claims data, 
real-world weight loss studies, and estimated avoided costs for major chronic conditions.`,
    14,
    30,
    { maxWidth: 180 }
  );

  doc.save('glp1_roi_summary.pdf');
}
