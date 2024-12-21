import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CombineType, User } from "../../model/interface";
import {
  addNewUser,
  deleteUserreducer,
  getUser,
  updateUserReducer,
} from "../../store/reducers/userReducer";

export default function Admin() {
  const getData: any = useSelector((state: CombineType) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const addUser = () => {
    const newUser = {
      name: "khá bảnh",
    };
    dispatch(addNewUser(newUser));
  };

  const deleteUser = (id: number) => {
    dispatch(deleteUserreducer(id));
  };

  // State for input value and temporary user
  const [inputValue, setInputValue] = useState<string>("");
  const [tempUser, setTempUser] = useState<User | null>(null);

  // Function to update a user
  const updateUser = (id: number) => {
    const currentValue = getData.users.find((item: User) => item.id === id);
    if (currentValue) {
      setInputValue(currentValue.name);
      setTempUser(currentValue);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div
        style={{
          border: "2px solid black",
          padding: "20px",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {getData.users.map((user: User) => (
          <div
            key={user.id}
            style={{
              display: "grid",
              gap: "20px",
              gridTemplateColumns: "2fr 1fr 1fr",
            }}
          >
            <li style={{ width: "300px" }}>{user.name}</li>
            <button onClick={() => deleteUser(user.id)}>delete</button>
            <button onClick={() => updateUser(user.id)}>update</button>
          </div>
        ))}
        <br />
        <button onClick={addUser}>Add User</button>
      </div>
      {/* Modal update */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "200px",
          border: "2px solid black",
          padding: "20px",
        }}
      >
        <h3>Update user</h3>
        <div>
          <span>Name:</span>
          <input
            type="text"
            style={{ width: "97%" }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            if (tempUser) {
              dispatch(updateUserReducer({ ...tempUser, name: inputValue }));
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
