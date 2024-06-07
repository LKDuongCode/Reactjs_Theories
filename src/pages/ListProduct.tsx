import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function ListProduct() {
  let [searchParam, setSearchParam] = useSearchParams();
  let [inputValue, setInputValue] = useState("");
  let paramValue = searchParam.get("key"); // lấy dữ liệu trên param. 
  console.log(paramValue);
  let handleSearch = () => {
    setSearchParam({ key: inputValue }); // truyền dữ liệu lên param. 
  };
  return (
    <>
      <Link to={"/product-detail"}>Xem chi tiết</Link>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}
