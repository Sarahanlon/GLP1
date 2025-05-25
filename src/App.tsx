import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import CalculatorPage from './pages/CalculatorPage';
import EducationPage from './pages/EducationPage';
import BestPracticesPage from './pages/BestPracticesPage';
import ConsultingPage from './pages/ConsultingPage';
import NavBar from './components/Shared/NavBar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/best-practices" element={<BestPracticesPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;