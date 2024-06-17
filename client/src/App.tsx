import React from "react";
import Register from "./components/register/Register";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/notFound/NotFound";
import Login from "./components/login/Login";

export default function App() {
  return (
    <div>
      <nav className="flex gap-4">
        <NavLink to={"/register"}>Đăng ký</NavLink>
        <NavLink to={""}>Trang chủ</NavLink>
        <NavLink to={"/login"}>Đăng nhập</NavLink>
      </nav>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}
