import React from 'react';

const MethodologySection = () => (
  <div className="mt-8">
    <h3 className="text-md font-semibold mb-2">Methodology Summary</h3>
    <p className="text-sm text-gray-600">
      This calculator estimates the financial and health impact of covering GLP-1 medications in employer-sponsored plans.
      It uses real-world persistence, adherence, cost, and weight loss effectiveness data to project ROI, PMPM, and cost avoidance.
      Inputs are fully adjustable, and output logic aligns with current findings from WTW, IFEBP, and BCBS (2024).
    </p>
    <p className="mt-2 text-xs text-gray-500">
      View full methodology and assumptions in downloadable summary.
    </p>
  </div>
);

export default MethodologySection;