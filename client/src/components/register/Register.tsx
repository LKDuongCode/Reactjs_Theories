import React, { useEffect } from "react";
import bcrypt from "bcryptjs-react";
export default function Register() {
  /*
    tạo form cho người dùng nhập
    lấy thông tin người dùng
    khi gửi thì kiểm tra xem email có tồn tại không.
    - nếu có: email đã tồn tại
    - nếu không: thêm vào.

    => dùng câu truy vấn axios.get("http://localhost:8000/users/email_like={email người dùng nhập}")

    => có 2 kết quả trả về
    1. = [] = email chưa tồn tại => {
    -mã hóa mật khẩu : dùng thư viện bcrypt để mã hóa
    -lưu vào db.json
    }

    2. = [{}] = email đã có
    */

  //sử dụng bcrypt-react để mã hóa dữ liệu.
  useEffect(() => {
    let pass: string = "12345";
    bcrypt.hash(pass, 10, function (err, hash) {
      console.log(111, hash);
      //lưu lên db.json
    });
  }, []);

  return (
    <div>
      <h2>Đăng kí tài khoản</h2>
      <div>
        <label htmlFor="">Tên đăng nhập:</label>
        <input type="text" placeholder="Nhập tên của bạn..." />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input type="text" placeholder="Nhập email đăng kí..." />
      </div>
      <div>
        <label htmlFor="">Mật khẩu:</label>
        <input type="text" placeholder="Nhập mật khẩu..." />
      </div>
    </div>
  );
}
