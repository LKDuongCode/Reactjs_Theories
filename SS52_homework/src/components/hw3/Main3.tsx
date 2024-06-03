import React from "react";
import About from "./about/About";
import { NavLink, Route, Routes } from "react-router-dom";
import Contact from "./contact/Contact";
import Elements from "./elements/Elements";
import Index from "./index/Index";
import Services from "./service/Services";
import "./css/main3.css";
export default function Main3() {
  return (
    <div>
      <nav className="nav-hw3">
        <NavLink to={"/about3"}>About</NavLink>
        <NavLink to={"/contact3"}>Contact</NavLink>
        <NavLink to={"/elements3"}>Elements</NavLink>
        <NavLink to={"/index3"}>Index</NavLink>
        <NavLink to={"/services3"}>Services</NavLink>
      </nav>
      <Routes>
        <Route path="/about3" element={<About></About>}></Route>
        <Route path="/contact3" element={<Contact></Contact>}></Route>
        <Route path="/elements3" element={<Elements></Elements>}></Route>
        <Route path="/index3" element={<Index></Index>}></Route>
        <Route path="/services3" element={<Services></Services>}></Route>
      </Routes>
    </div>
  );
}
