import { createSlice } from "@reduxjs/toolkit";

let initial={status:'initial',count:0,error:null}

export const axiosCount=createSlice({name:'asyncAxios',initialState:initial,reducers:{
 initializeAx(state,action){
    state.count=action.payload
 },
 statusState(state,action){
    state.status=action.payload
 },
 setError(state,action){
    state.error=action.payload
 }
}})

export const  {initializeAx, statusState,setError}=axiosCount.actions
