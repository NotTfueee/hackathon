import React from 'react';
import '../index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import LandingPage from './landingPage';
import Login from './Login';
import Waste from './waste';
import ReportIssue from './reportIssue';
import ImageUpload from './ImageUpload';  // Import the ImageUpload component

const App1 = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/waste" element={<Waste />} />
          <Route path="/issue" element={<ReportIssue />} />
          <Route path="/upload" element={<ImageUpload />} />  {/* New route for ImageUpload */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App1;