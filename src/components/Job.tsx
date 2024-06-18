import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Job() {
  let newJob = {
    id: 2,
    name: "learn Redux",
    status: false,
  };
  //không được set state trong useSelector.
  let stateJob: any = useSelector((state) => {
    return state;
  });

  //   console.log(stateJob);
  let dispath = useDispatch();
  let addJob = () => {
    dispath({
      type: "ADD",
      payload: newJob, // obj truyền lên lấy dữ liệu từ input
    });
  };
  return (
    <div>
      {stateJob.reducerJob.map((item: any, index: number) => {
        return (
          <div key={index}>
            Job #{index + 1} : {item.name}
          </div>
        );
      })}

      <button onClick={addJob}>Add job</button>
    </div>
  );
}
