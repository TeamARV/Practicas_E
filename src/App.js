import Index from "./Pages/Index";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Plantilla from "./Layout/Plantilla"


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle"






function App() {
  
  return (
  <div>
    <Plantilla>
      <Router>
        <Routes> 
          <Route path="/" element = {<Index/>}/>
          <Route path="Page1" element = {<Page1/>}/>
          <Route path="Page2" element = {<Page2/>}/>      
        </Routes>
      </Router>
    </Plantilla>
  </div>
  );
}

export default App;
