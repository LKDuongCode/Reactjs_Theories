import axios from "axios";
import React, { useEffect } from "react";

export default function PhanTrang() {
  /*
    chia một trang có bao nhiêu bản ghi
    _page: số trang
    _limit: số phần trử trong trang.
    */
  useEffect(() => {
    axios
      .get("http://localhost:3000/product?_page=1&_limit=4")
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err, "ERRoR");
      });
  }, []);
  return <div>PhanTrang</div>;
}
