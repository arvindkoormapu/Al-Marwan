import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout component={Landing} />} />
        <Route path="/about" element={<MainLayout component={About} />} />
        <Route path="/contact" element={<MainLayout component={Contact} />} />
        <Route path="/projects" element={<MainLayout component={Projects} />} />
        <Route path="/project/:id" element={<MainLayout component={ProjectDetails} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
