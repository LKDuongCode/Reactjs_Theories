import { createSlice } from "@reduxjs/toolkit";

// init state
let initState:number = 0;

let countReducer = createSlice({
    name:'counts',
    initialState:initState,
    reducers:{
        //nơi thực hiện các action
        todoIncrease(state,action){
            return state + action.payload
        },
        todoDecrease(state,action){
            return state - action.payload
        }
    }
})

export let { todoIncrease, todoDecrease } = countReducer.actions
export default countReducer.reducer