import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Login() {
  // nhận giá trị mà bên register gửi sang
  //dùng useLocation được cung cấp như useNavigate
  let location = useLocation();
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  useEffect(() => {
    // setEmail(location.state.email);
    if (location.state.email && location.state.pass) {
      setEmail(location.state.email);
      setPass(location.state.pass);
    }
  }, []);
  return (
    <div>
      Login <br />
      <label htmlFor="">Email:</label>
      <input type="email" name="email" defaultValue={email} /> <br />
      <label htmlFor="">Pass:</label>
      <input type="text" defaultValue={pass} /> <br />
      <button>Login</button>
    </div>
  );
}
