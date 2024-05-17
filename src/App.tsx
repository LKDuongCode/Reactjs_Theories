import React, { useState, useCallback } from "react";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseContext from "./components/UseContext";
import BackToTop from "./components/BackToTop/BackToTop";
import Memo from "./components/Memo";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";

export default function App() {
  let [count, setCount] = useState<number>(0);
  let [name, setName] = useState<string>("duong");

  //khi mỗi lần function App re-render thì lại tạo ra một biến và gán giá trị là một function
  //function là kiểu dữ liệu tham chiếu - reference-type
  //==> mỗi lần sẽ tạo biến và gán địa chỉ mới.(dù vẫn là hàm đó không có gì thay đổi khác với việc thay đổi state.)
  //==> dùng usecallback để giải quyết vấn đề này
  let increase = useCallback(() => {
    //hàm dùng cho useCallback
    let handleIncrease = () => {
      //vấn đề được giải quyết, chỉ chạy một lần và không bị thay đổi địa chỉ.(không bị gán địa chỉ mới)
    };
    return handleIncrease;
  }, []);
  return (
    <div>
      {/* <UseEffect></UseEffect> */}
      {/* <UseRef></UseRef> */}
      {/* <UseContext></UseContext> */}
      {/* <BackToTop></BackToTop> */}
      <Memo count={count} name={name} increase={increase}></Memo>
      <UseCallback></UseCallback>
      <UseMemo></UseMemo>
    </div>
  );
}
