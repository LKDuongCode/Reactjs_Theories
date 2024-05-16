import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCout] = useState<number>(0);
  let [number,setNumber] = useState<number[]>([]);
  let [depend,setDepend] = useState<boolean>(false);

  useEffect(() => {
    console.log("useEffect");
  },[depend]);

  console.log("111");
  const handleClick = () => {
    //-----------------------------------------------------
//     /*
//     khi click thì sẽ thêm một số bất kì vào mảng number
//     */
//    let num = Math.ceil(Math.random() * 100);
//    number.push(num);
//    console.log(number);
//    /*
//    Kiểu dữ liệu mảng: 
//    */
//    //sau khi thêm thì đi set lại state cho nó
// //    setNumber([...number]) // ==> cpn re-render do địa chỉ bị thay đổi. 
//    setNumber(number)// ==> cpn không bị re-render nhưng vân thêm vào mảng mới.
//----------------------------------------------------------------------------------
    setCout(count +1)
  };
  return (
    <div>
      {/* 
            Tất cả các hook bản chất là các function.
            Khi dùng thì import để dùng.

            useEffect nhận vào 2 đối số: 
                                        1 call back (arrow function)
                                        2 [] || [deps].
            ==>
                useEffect có 3 cách dùng
                1. chỉ chứa callback là 1 arrowfunction 
                    khi cpn được mount vào dom thì useEffect được gọi.
                    mỗi lần cpn được re-render thì useEffect cũng được gọi. 

                2. chứa callback và 1 mảng rỗng [].
                    cũng được gọi sau khi cpn được mount vào dom.
                    khác với cách 1, khi cpn được re-render thì useEffect ko được gọi lại. 

                3. chứa callback, [dependency - sự phụ thuộc]
                    cũng được gọi sau khi cpn được mount vào dom
                    khi dependency thay đổi thì useEffect được gọi.
                    
            ==> useEffect là phương thức thường được dùng để xử lí các tác vụ như callAPI để lấy data.
                thường dùng để xử lí các side Effect (ảnh hưởng bên cạnh.) - để hiển thị ra UI (giao diện trước)
                nếu không khi gặp bug thì sẽ không render giao diện ra màn hình.

            ==> CpnDidmount => được gọi sau khi render lần đầu. nó gần giống useEffect.
        */}
        <p>Count : {count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
