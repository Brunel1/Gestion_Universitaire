import React from 'react';
// import { App } from 'antd';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import App from './App';
// import App from './HomePage/login/Source1login1';
// import App from "./HomePage/login/Acueille/Sidebar";
// import App from "./HomePage/login/Acueille/Dashboard";
// import App from "./HomePage/login/Acueille/AjouteEtude";
// import App from "./HomePage/login/Acueille/Source2acueille";
// import App  from "./HomePage/login/Acueille/components/Section";

// import Html from './HomePage/login/Guide.html'
import Home from "./HomePage/Home";
import Source from "./HomePage/login/Source2login2";
import Acueille from "./HomePage/login/Source2acueille";
import AjouteEtude from "./HomePage/login/Acueille/AjouteEtude";
import EmploiDuTemps from "./HomePage/login/Acueille/EmploiDuTemps";
import AjouteEnseignants from "./HomePage/login/Acueille/AjouteEnseignants";
import GestionUtlisateur from "./HomePage/login/Acueille/GestionUtlisiateur";

import reportWebVitals from './reportWebVitals';

// Reacte router vers d'autre page avec root
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Source2login2" element={<Source />} />
        <Route path='/AjouteEtude' element={<AjouteEtude />} />
        <Route path="/Source2acueille" element={<Acueille />} />
        <Route path="/EmploiDuTemps" element={<EmploiDuTemps />} />
        <Route path='/AjouteEnseignants' element={<AjouteEnseignants />} />
        <Route path="/GestionUtlisiateur" element={<GestionUtlisateur />} />
        {/* <Route path="/Guide.html"  element={<Html/>} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


//# Reacte router  vers d'autre page avec App
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(
//    <React.StrictMode>
//      <App />
//    </React.StrictMode>
//  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
