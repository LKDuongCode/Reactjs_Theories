import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let [email, setEmail] = useState<string>("");
  let [pass, setPass] = useState<string>("");
  let handleChangeE = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  let handleChangeP = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPass(e.target.value);
  };

  // vậy muốn sau khi đăng ksi xong chuyển đến trang login thì làm ntn? ví dụ:
  let navigate = useNavigate();
  //cái này được cung cấp bởi react-router-dom
  let register = () => {
    //lấy giá trị người dùng
    // xử lí các tác vụ validate,...
    //check all ok => chuyển sang trang login.
    let user = {
      email: email,
      pass: pass,
    };
    navigate("/login", { state: user });
    //dùng hook useNavigate để chuyển trang login.
    //NGOÀI CÔNG DỤNG CHUYỂN ĐƯỜNG DẪN THÌ CÓ THỂ TRUYỀN GIÁ TRỊ. truyền bằng state (thuộc tính mặc định)
  };
  return (
    <div>
      Register
      <label htmlFor="">Email:</label>
      <input type="text" onChange={handleChangeE} /> <br />
      <label htmlFor="">Pass:</label>
      <input type="text" onChange={handleChangeP} /> <br />
      <button onClick={register}>Sign up</button>
    </div>
  );
}
