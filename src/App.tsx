import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Homee from "./components/home/Homee";
import NotFound from "./components/register/NotFound";
import About from "./components/About/About";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import DefaultHome from "./components/register/DefaultHome";

export default function App() {
  return (
    <>
      REACT ROUTER DOM
      {/*
      - Là một thư viện.
      Tạo bộ định tuyến cho trang web - cho phép react element được hiển thị ứng với các đường \
      dẫn URL 

      -Cách dùng :
        Cài đặt: npm install react-router-dom 
        => dùng cpn browserRouter để cung cấp bọ định tuyến cho toàn app. Bọc nó vào app bên main. 


      */}
      {/* import routes bên trong chứa các route 
      các router truyền đường dẫn và cpn.
      */}
      <Routes>
        {/* router có cơ chế lồng */}
        <Route path="" element={<Homee></Homee>}>
          {/* hiển thị lần đầu khi mở trang home mà không cần bấm vào,
          nó sẽ mạc định return 1 cpn con chỉ cần thêm từ index. */}
          <Route index element={<DefaultHome></DefaultHome>}></Route>
          {/* dùng outlet để hiển thị cháu.  */}
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/news" element={<News></News>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}
