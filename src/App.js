import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Menu/Sidebar.jsx';
import Dashboard from './Components/pages/Dashboard';
import Download from './Components/pages/Download';
import Settlement from './Components/pages/Settlement';
import Transaction from './Components/pages/Transaction';
import Login from './Components/Login/Login.jsx';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Sidebar handleLogout={handleLogout}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/download" element={<Download />} />
            <Route path="/settlement" element={<Settlement />} />
            <Route path="/transaction" element={<Transaction />} />
          </Routes>
        </Sidebar>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </BrowserRouter>
  );
};

export default App;
