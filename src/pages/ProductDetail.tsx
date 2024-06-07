import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  console.log(useParams());
  // useParams trả về một đối tượng
  // trong đó chứa các thuộc tính đã được định nghĩa sau dấu : bên app.
  let { id, name, price } = useParams();
  console.log(id);
  return (
    <div>
      <p>id : {id}</p>
      <p>name : {name}</p>
      <p>price : {price}</p>
    </div>
  );
}
