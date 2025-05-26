import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `hover:text-primary transition font-medium ${isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-700'}`;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex gap-6 text-sm">
        <NavLink to="/" className={navClass}>Home</NavLink>
        <NavLink to="/calculator" className={navClass}>Calculator</NavLink>
        <NavLink to="/education" className={navClass}>Education</NavLink>
        <NavLink to="/best-practices" className={navClass}>Best Practices</NavLink>
        <NavLink to="/consulting" className={navClass}>Consulting</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;