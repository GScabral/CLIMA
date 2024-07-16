import React from "react";
import {Route,Routes,useLocation}from 'react-router-dom';
import Home from "./home/home";

function App() {

  return (
   <div>
    <Routes>
      <Route path='/'element={<Home/>}/>
    </Routes>
   </div>
  )
}

export default App
