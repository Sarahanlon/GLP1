import React from 'react';

const EducationPage = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-6">Education Hub</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-4 bg-white shadow rounded-md">
        <h3 className="text-lg font-semibold">Top 5 GLP-1 Trends for Employers</h3>
        <p className="text-sm text-gray-600 mt-2">Explore the biggest shifts in benefit design, coverage patterns, and ROI expectations.</p>
      </div>
      <div className="p-4 bg-white shadow rounded-md">
        <h3 className="text-lg font-semibold">Real-World Study: Weight Loss Impact</h3>
        <p className="text-sm text-gray-600 mt-2">Summarizing outcomes from BCBS, Mayo, and IFEBP research on GLP-1 effectiveness.</p>
      </div>
      <div className="p-4 bg-white shadow rounded-md">
        <h3 className="text-lg font-semibold">Cost Considerations</h3>
        <p className="text-sm text-gray-600 mt-2">What employers need to know about rebate-adjusted costs and formulary design.</p>
      </div>
    </div>
  </div>
);

export default EducationPage;