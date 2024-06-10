import axios from "axios";
import React from "react";

export default function Add() {
  //thêm một bản ghi mới
  let newUser = {
    name: "VOA+",
  };
  axios
    .post("http://localhost:3000/product", newUser)
    .then((data) => {
      console.log(data.data);
    })
    .catch((err) => {
      console.log(err, "ERRoR");
    });
  return <div>Add</div>;
}
