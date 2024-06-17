import axios from "axios";

//tạo biến môi trường
let baseURL = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});
//xuất
export default baseURL;
