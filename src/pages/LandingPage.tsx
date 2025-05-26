import React from 'react';
import { Link } from 'react-router-dom';
import LeadCapture from '../components/Shared/LeadCapture';

const LandingPage = () => {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">GLP-1 Investment & Insight Tool</h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
        For benefit leaders, plan strategists, and health innovators navigating the future of weight loss medications.
        This tool combines forecasting, transparency, and C-suite-ready outputs into one streamlined experience.
      </p>
      <Link
        to="/calculator"
        className="inline-block px-6 py-3 bg-primary text-white rounded shadow hover:bg-primary-hover transition"
      >
        Launch the Calculator
      </Link>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2 text-primary">📊 Model Your Investment</h3>
          <p className="text-sm text-gray-600">Instantly estimate PMPM, ROI, and breakeven for your population.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2 text-primary">📁 Summarize and Share</h3>
          <p className="text-sm text-gray-600">One-click PDF exports with embedded methodology and assumptions.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2 text-primary">📡 Stay Informed</h3>
          <p className="text-sm text-gray-600">Education, research insights, and evolving best practices all in one place.</p>
        </div>
      </div>
      <LeadCapture />
      <p className="mt-12 text-xs text-gray-400">This site is a working prototype under development.</p>
    </div>
  );
};

export default LandingPage;