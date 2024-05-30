import React from "react";
import "./home.css";
import { Link, NavLink, Outlet } from "react-router-dom";
export default function Homee() {
  return (
    <div>
      <nav>
        {/* dùng thẻ link thay a để không bị load lại trang khi bấm */}

        {/* <Link to="/about">About</Link>
        <Link to="news">News</Link>
        <Link to="/contact">Contact</Link> */}

        {/* Sinh ra thêm navLink
        - khác link ở chỗ sẽ thêm một class active vào thẻ a(là thẻ NavLink sau khi biên dịch)
        - còn link thì không.
        - ta có thể dử dụng class active trong css để tạo hiệu ứng và more.
        
        */}
        <NavLink to="/about">About</NavLink>
        <NavLink to="news">News</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
