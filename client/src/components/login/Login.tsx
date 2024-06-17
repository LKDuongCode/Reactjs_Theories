import React, { useEffect } from "react";
import bcrypt from "bcryptjs-react";
export default function Login() {
  /*
  nhập email và pass
  vào db xem email người dùng nhập có trong db không 
  nếu có thì lấy thông tin user và compare.
  */
  //sử dụng bcrypt-react để mã hóa dữ liệu.
  useEffect(() => {
    let pass: string = "12345";
    bcrypt.hash(pass, 10, function (err, hash) {
      console.log(111, hash);
      //so sánh hai mật khẩu.
      bcrypt.compare(pass, hash, (err, res) => {
        console.log("so sánh 2 mật khẩu:", res);
      });
    });
  }, []);
  return (
    <>
      <div>
        <h2>Đăng nhập</h2>
        <div>
          <label htmlFor="">Email:</label>
          <input type="text" placeholder="Nhập email..." />
        </div>
        <div>
          <label htmlFor="">Mật khẩu:</label>
          <input type="text" placeholder="Nhập mật khẩu..." />
        </div>
      </div>
    </>
  );
}
