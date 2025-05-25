import React from 'react';

const BestPracticesPage = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-6">Best Practice Examples</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="p-4 bg-white rounded shadow">
        <h3 className="text-lg font-semibold">Mayo Clinic Plan Design</h3>
        <p className="text-sm text-gray-600 mt-2">Annual cap with coaching requirement—lower PMPM, strong utilization control.</p>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <h3 className="text-lg font-semibold">WTW ROI Model</h3>
        <p className="text-sm text-gray-600 mt-2">Highlights long-term ROI potential with stratified condition savings.</p>
      </div>
    </div>
  </div>
);

export default BestPracticesPage;