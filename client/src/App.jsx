import React from "react";
import Home from "./Pages/Home";
import Hrga from "./Pages/Hrga";
import Finance from "./Pages/Finance";
import Sales from "./Pages/Sales";
import Project from "./Pages/Project";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hrga" element={<Hrga />} />
        <Route path="/Finance" element={<Finance />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
