import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import About from "./pages/About";
import Projects from "./pages/Projects"; 
import Resume from "./pages/Resume";
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="App">  
        <Routes> 
            <Route path="/resume" element={<Resume />} /> 
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/" element={<App />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
