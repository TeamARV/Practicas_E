import Index from "./Pages/Index";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Plantilla from "./Layout/Plantilla";
import Plantilla2 from "./Layout/Plantilla2";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";

import React from 'react'
import { useState,useEffect } from 'react'
import { UserContext } from "./Context/user";



function App() {

  const [GlobalData, setGlobalData] = useState({nombre:'minombre'});
  
  return (
  <div>

    <UserContext.Provider value={{GlobalData,setGlobalData}}>
      
      <Router>
        <Routes> 
         
          <Route path="/" element = {<Plantilla/>}>
          <Route path="/" element = {<Index/>}/>
          <Route path="Page1" element = {<Page1/>}/>
          </Route>
         
          <Route path="/" element = {<Plantilla2/>}>
          <Route path="Page2" element = {<Page2/>}/> 
          </Route>

        </Routes>
      </Router>


      </UserContext.Provider>
     

    
    
  </div>
  );
}

export default App;
