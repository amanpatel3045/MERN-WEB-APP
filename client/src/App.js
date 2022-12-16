import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Navbar />

      
      
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
