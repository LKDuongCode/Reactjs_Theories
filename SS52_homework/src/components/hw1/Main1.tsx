import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "../hw2/nav.css";
export default function Main1() {
  return (
    <div>
      <nav className="nav-hw1">
        <NavLink to={""}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}
