import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment(state,action){//this state indicating the abouve initial state
            state.count++
        },
        decrement(state,action){
            state.count--
        },
        reset(state,action){
            state.count=0
        },
        addvalue(state,action){
            state.count+=action.payload
        }

    }
})
export default counterSlice.reducer//herre we get an default reducer
export const {increment,decrement,reset,addvalue}=counterSlice.actions