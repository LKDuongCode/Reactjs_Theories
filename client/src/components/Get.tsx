import axios from "axios";
import React from "react";

export default function Get() {
  //lấy tất cả bản ghi trong mảng user
  axios
    .get("http://localhost:3000/product")
    .then((data) => {
      console.log(data.data);
    })
    .catch((err) => {
      console.log(err, "ERRoR");
    });
  //lấy một bản ghi bằng id
  axios
    .get("http://localhost:3000/product/2")
    .then((data) => {
      console.log(data.data);
    })
    .catch((err) => {
      console.log(err, "ERRoR");
    });
  return <div>Get</div>;
}
