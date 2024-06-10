import axios from "axios";
import React, { useEffect } from "react";

export default function Sort() {
  // Sắp xếp.
  /*
    lấy mảng user và sắp xếp name theo bảng chữ cái
    tăng dần : asc (ascending)
    giảm dần : desc (descending)
    */
  useEffect(() => {
    axios
      .get("http://localhost:3000/product?_sort=name&_order=asc")
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err, "ERRoR");
      });
  }, []);
  return <div>Sort</div>;
}
