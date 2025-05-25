import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="bg-white shadow p-4 mb-6">
    <div className="flex gap-6 text-sm font-medium text-gray-700">
      <Link to="/" className="hover:text-indigo-600">Home</Link>
      <Link to="/calculator" className="hover:text-indigo-600">Calculator</Link>
      <Link to="/education" className="hover:text-indigo-600">Education</Link>
      <Link to="/best-practices" className="hover:text-indigo-600">Best Practices</Link>
      <Link to="/consulting" className="hover:text-indigo-600">Consulting</Link>
    </div>
  </nav>
);

export default NavBar;