import axios from "axios";
import React from "react";

export default function Update() {
  //update put
  let upProduct = {
    name: "IPhone",
  };
  axios
    .put("http://localhost:3000/product/7", upProduct)
    .then((data) => {
      console.log(data.data);
    })
    .catch((err) => {
      console.log(err, "ERRoR");
    });
  //up path
  axios
    .patch("http://localhost:3000/product/8", upProduct)
    .then((data) => {
      console.log(data.data);
    })
    .catch((err) => {
      console.log(err, "ERRoR");
    });
  return <div>Update</div>;
}
