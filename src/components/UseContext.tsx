import React, { createContext, useState } from "react";
import AContext from "./AContext";
export const SetUseContext = createContext("");
export default function UseContext() {
  // dữ liệu trong đây => cần truyền đến D mà ko qua D
  let [name, setName] = useState<string>("duong");
  return (
    <div>
      {/* 
        UseContext là một hook
        công dụng: 
                  1.
      */}
      <SetUseContext.Provider value={name}>
        <AContext></AContext>
      </SetUseContext.Provider>
    </div>
  );
}
