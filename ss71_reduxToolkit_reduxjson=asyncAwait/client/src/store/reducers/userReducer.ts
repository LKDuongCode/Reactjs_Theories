import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../model/interface";
import axios from "axios";

// init state
let initState: User[] = [];

// hàm lấy tất cả user
export const getUser:any = createAsyncThunk(
  "users/getAllUser",
  async () => {
    const response = await axios.get('http://localhost:3000/users');
    return response.data;
  }
);

// hàm thêm mới
export const addNewUser :any= createAsyncThunk(
  "users/addUser",
  async (user) => {
    const response = await axios.post("http://localhost:3000/users", user);
    return response.data;
  }
);

// hàm xóa
export const deleteUserreducer:any = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    return id; // Trả về id để xác định người dùng nào đã bị xóa
  }
);

// hàm sửa
export const updateUserReducer:any = createAsyncThunk(
  "users/updateUser",
  async (tempUser: User) => {
    const updateRes = await axios.patch(`http://localhost:3000/users/${tempUser.id}`, tempUser);
    return updateRes.data;
  }
);

const userReducer = createSlice({
  name: "users",
  initialState: { users: initState },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        // trạng thái chờ lấy dữ liệu
      })
      .addCase(getUser.fulfilled, (state, action) => {
        // trạng thái lấy dữ liệu thành công
        state.users = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        // trạng thái lấy dữ liệu thất bại
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        // trạng thái thêm mới thành công
        state.users.push(action.payload);
      })
      .addCase(deleteUserreducer.fulfilled, (state, action) => {
        // trạng thái xóa thành công
        state.users = state.users.filter(item => item.id !== action.payload);
      })
      .addCase(updateUserReducer.fulfilled, (state, action) => {
        state.users = state.users.map(user => 
          user.id === action.payload.id ? action.payload : user
        );
      });
  },
});

export default userReducer.reducer;
