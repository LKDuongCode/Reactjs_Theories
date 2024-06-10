import axios from "axios";
import React from "react";

export default function Del() {
  //xóa bản ghi
  axios
    .delete("http://localhost:3000/product/2")
    .then((data) => {
      console.log(data.data);
    })
    .catch((err) => {
      console.log(err, "ERRoR");
    });
  return <div>Del</div>;
}
