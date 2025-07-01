import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css'; // Importing the global styles
import {ShowLoginForm} from './ShowLoginForm.js'; // Importing the ShowLoginForm component
import { ShowRegisterForm } from './ShowRegisterForm.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<ShowLoginForm />} />
        <Route path="/register" element={<ShowRegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
