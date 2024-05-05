import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import Dashboard from './Dashboard'; 
import Navbar from './Navbar';

function App() {
  return ( 
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="about" element={<About/>} />
          <Route path="dashboard" element={<Dashboard />} /> 
         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
