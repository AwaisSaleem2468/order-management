import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubdomainRouter from './components/SubdomainRouter/SubdomainRouter';
import OrdersTable from './components/OrdersTable/OrdersTable';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:subdomain" element={<SubdomainRouter />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
