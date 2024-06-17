import React from "react";
import Count from "./components/Count";
import store from "./store/store";
import Job from "./components/Job";
/*
redux là một thư viện bên thứ ba => quản lí state.
 ! vấn đề react = khi truyền dữ liệu giữa các cpn sẽ mất thời gian, công sức, rối,...

 => redux giúp việc quản lí state đơn giản hơn.
 giúp các cpn can tương tác dữ liệu đơn giản hơn.

CÁC BƯỚC CẤU HÌNH REDUX
1. TẠO STORE.{
 trong Store chứa folder reducers
 chứa file store.ts
}. 

2. chạy lệnh npm i redux react-redux




*/

export default function App() {
  return (
    <div>
      App
      <Count></Count>
      <hr />
      <Job></Job>
    </div>
  );
}
