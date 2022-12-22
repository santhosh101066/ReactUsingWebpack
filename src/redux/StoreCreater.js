import { configureStore, createSlice } from "@reduxjs/toolkit";

let todo= createSlice({name:'todo',initialState:{todo:[],count:0},reducers:{setTodo(state,value){
state.todo.push(value.payload)
},increment(state){ state.count+=1}}})



export let store= configureStore({reducer:todo.reducer})


export let {setTodo, increment}=todo.actions
store.subscribe(()=>console.log(store.getState()))
store.dispatch(setTodo('value 1'))
store.dispatch({type:'todo/setTodo',payload:'value 2'})
store.dispatch(increment())
store.dispatch(increment())

