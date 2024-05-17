import React, { useMemo, useState } from "react";
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
/*
  đây có logic tính toán như sau
  */
let cart: Product[] = [
  {
    id: 1,
    name: "iphoneXNXX",
    price: 10000,
    quantity: 5,
  },
  {
    id: 1,
    name: "iphoneXVDS",
    price: 12000,
    quantity: 3,
  },
  {
    id: 1,
    name: "iphonePHubs",
    price: 105000,
    quantity: 1,
  },
];


export default function UseMemo() {
  //hàm thêm
let addToCart = ()=>{
  let newProduct:Product = {
    id: 1,
    name: "iphoneXXVIP",
    price: 999000,
    quantity: 3,
  }
  //thêm
  myCart.push(newProduct);
  setMyCart([...myCart])
}
  let [count, setCount] = useState<number>(0);
  let [myCart, setMyCart] = useState<any>(cart);

  //tham số nhận vào cũng giống use Callback
  let price = useMemo(() => {
    //đi tính toán giá phải trả
    let payment = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    return payment;
  }, [myCart]);

  return (
    <div>
      {/* 
        memory - ghi nhớ
        để làm gì?
        - đây là một hook sinh ra để ghi nhớ lại những tính toán phức tạp và chỉ tính toán lại khi cần thiết.
        ==> cộng dụng: ghi nhớ lại tính toán để không bị tính toán lại không cần thiết khi thay 
        đổi 1 state khác.
      */}
      <p>Cái giá: {price}</p>
      <button onClick={() => setCount(count + 1)}>Change name</button>
      <button onClick={addToCart}>Add</button>
    </div>
  );
}
