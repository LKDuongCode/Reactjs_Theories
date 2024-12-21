import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { todoDecrease, todoIncrease } from "../store/reducers/countReducer";
interface Combine {
  counts: number;
}
export default function Count() {
  let count = useSelector((state: Combine) => {
    return state.counts;
  });
  let dispatch = useDispatch();
  let handleIncrease = () => {
    dispatch(todoIncrease(1));
  };
  let handleDecrease = () => {
    dispatch(todoDecrease(1));
  };
  return (
    <div>
      Count :{count}
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Increase</button>
    </div>
  );
}
