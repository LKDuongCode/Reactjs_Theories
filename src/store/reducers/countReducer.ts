import { useReducer } from "react";

let initCount:number = 0;

// create a function reducerCount
let reducerCount = (state=initCount,action:any)=>{
    
    switch (action.type) {
        case 'INCREASE':
            return state + action.payload;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}

//xuất
export default reducerCount;