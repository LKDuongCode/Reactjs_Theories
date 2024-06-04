import React from "react";

export default function App() {
  /*
  Đồng bộ : Synchoronous
  Bất đồng bộ : Asynchoronous

  - JS là ngôn ngữ đơn luồng (chạy 1 luồng duy nhất).
  - Luồng code chạy từ trái qua phải, từ trên xuống dưới.
  
  ?Tại sao js không đa luồng mà chỉ đơn luồng?
  -> Đa luồng thì các luồng có thể chia sẻ tài nguyên lẫn nhau, ảnh hưởng đến logic code của nhau
  vì thế, tư duy ban đầu của js là đơn luồng (single-thread).

  khi gặp các tác vụ cần thời gian xử lí như lấy dữ liệu database, gửi request lên sever
  đọc file, ghi flie trong nodejs... thì cần thời gian xử lí
  => js không đợi các tác vụ này xử lí xong rồi mới đến tác vụ khác.


  ==>BA CÁCH GIẢI QUYẾT CÁC TÁC VỤ BẤT ĐỒNG BỘ
  1. callback
    - callback là hàm được truyền vào làm đối số của hàm khác.
    ví dụ 1:

  2. promise - ES6(2015)
  3. asyn-await



  */
  // console.log(1);
  // console.log(2);
  // console.log(3);

  // console.log(11);
  // setTimeout(() => {
  //   //web API.
  //   console.log(22);
  // }, 1000);
  // console.log(33);
  //--------------------------------------------------------
  //==> giải quyết vấn đề bất đồng bộ bằng callback.
  let sdt: number = 0;
  function getPhoneNumber(callback: Function) {
    console.log("Hoàng gọi cho Quỳnh xin số Phương Anh.");
    console.log("Quỳnh bảo đợi tý để tìm.");
    //trong quá trình đợi
    setTimeout(() => {
      sdt = 123456789;
      callback(sdt);
    }, 3000);
  }

  getPhoneNumber(callIfhave);

  function callIfhave(sdt: number) {
    console.log(`Hoàng gọi cho Phuoneg Anh theo số ${sdt}`);
  }
  // map---------------------------------------------------------
  let arr: number[] = [1, 2, 3, 4, 5];
  let newarr: number[] = arr.map((e) => {
    return e * 2;
  });
  console.log(newarr);

  //==> tạo call back map
  function customMap(arr: any, callback: any) {
    let resultArr = [];
    for (let value of arr) {
      resultArr.push(callback(value));
    }
    return resultArr;
  }
  let arr2 = [1, 2, 3, 4, 5];
  console.log(customMap(arr, (item: number) => item * 2));

  return <div></div>;
}
