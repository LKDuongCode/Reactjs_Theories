import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListProduct from "./pages/ListProduct";
import ProductDetail from "./pages/ProductDetail";
/*
link bài giảng
https://youtu.be/7qJQOA0QjFk
*/
export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/product-detail/:id/:name/:price"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route
          path="/list-product/"
          element={<ListProduct></ListProduct>}
        ></Route>
      </Routes>
    </>
  );
}
