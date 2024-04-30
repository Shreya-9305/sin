import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "../components/home/home";

import About from "../Pages/About/About";
import Header from "../components/Header/Header";
import Community from "../Pages/Community/Community";
import Event from "../Pages/Event/Event";
import Blog from "../Pages/Blog/Blog";






const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
       
        {/* <Route path="/home" element={<HomePage />}/> */}

        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Community/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/blogs" element={<Blog/>}/>
      
       
      </Routes>
    </BrowserRouter>
  );
};

export default Router;