import React from 'react';
import '../index.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import LandingPage from './landingPage';
import Login from './Login';
import Waste from './waste';
import ReportIssue from './reportIssue';


const App1 = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/waste" element={<Waste />}></Route>
          <Route path="/issue" element={<ReportIssue />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App1;
