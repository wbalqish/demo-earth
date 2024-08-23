import React from 'react';
import './index.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Project from './Routes/Project';

import { Route, Routes } from 'react-router-dom';
import GetStarted from './Routes/GetStarted';
import LoginForm from './Components/LoginForm';
import Dashboard from './Routes/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
