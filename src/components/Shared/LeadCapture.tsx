import React from 'react';

const LeadCapture = () => {
  return (
    <div className="mt-12 bg-white rounded-lg shadow p-6 max-w-2xl mx-auto text-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Stay in the Loop</h3>
      <p className="text-sm text-gray-600 mb-4">Want to be notified when new tools or enhancements go live?</p>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="email"
          placeholder="you@email.com"
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-2/3"
        />
        <button
          type="submit"
          className="bg-primary text-white px-5 py-2 rounded hover:bg-primary-hover transition"
        >
          Notify Me
        </button>
      </form>
    </div>
  );
};

export default LeadCapture;