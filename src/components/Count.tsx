import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCount } from "../action";

export default function Count() {
  /* để lấy dữ liệu trong kho dùng useSelector()
   useSelector() : có thể kiểm tra xem state có thay đổi hay không thì cập nhật lại UI.
  ! những state phải thay đổi 
  [...] state phải là state mới thì mới được, nếu không thì không cập nhật UI.
  */

  let stateCount: any = useSelector((state: any) => {
    return state;
  });

  //muốn thực hiện action dùng useDispath()
  let dispath = useDispatch();
  let handleClick = () => {
    dispath(actionCount("INCREASE", 5));
  };

  let handleClickDe = () => {
    dispath({
      type: "DECREASE",
    });
  };
  // console.log(stateCount);
  return (
    <div>
      <p>Giá trị count: {stateCount.reducerCount}</p>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleClickDe}>Decrease</button>
    </div>
  );
}
