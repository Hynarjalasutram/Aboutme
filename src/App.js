import Nav from "./Nav"
import React from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import "./App.css"

const { BrowserRouter, Routes, Route } = require("react-router-dom")
let App=()=>{
  return(
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App