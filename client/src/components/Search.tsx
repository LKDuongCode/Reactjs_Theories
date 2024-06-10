import axios from "axios";
import React, { useEffect } from "react";

export default function Search() {
  useEffect(() => {
    //tìm kiếm theo tên có chữ g trong thuộc tính name
    axios
      .get("http://localhost:3000/product?name_like=g")
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err, "ERRoR");
      });
    //tìm kiếm theo tên bắt đầu bằng chữ g thêm ^ vào trước g.
    axios
      .get("http://localhost:3000/product?name_like=^g")
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err, "ERRoR");
      });
  }, []);
  return <div>Search</div>;
}
