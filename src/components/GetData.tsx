import React from "react";

export default function GetData() {
  function getData() {
    fetch("http://localhost:3000/users")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      });

    console.log("lấy data đi xử lí");
  }
  getData();
  return <div>GetData</div>;
}
