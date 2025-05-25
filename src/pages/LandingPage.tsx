import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">GLP-1 ROI Calculator</h1>
    <p className="mb-4">Explore the financial and health impact of offering GLP-1 medications for weight loss.</p>
    <Link to="/calculator" className="text-blue-500 underline">Try the Calculator</Link>
  </div>
);

export default LandingPage;