import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from './counter';
import store from './store';

function ReduxReact() {
    const count=useSelector((state)=>state.counter.count)
    const getList=useSelector((state)=>state.MyList.mylist)
    const input=useRef()
    const mylist=useRef()
    const dispatch=useDispatch()
    useEffect(()=>{
        store.subscribe(()=>console.log(store.getState()))
    },[false])
    return (
        <div>
            <span>{count}</span>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <input type={'number'} ref={input}></input>
            <button onClick={()=>{input.current.value&& dispatch(incrementByValue(Number(input.current.value)))}}>Add</button><br/>
            <input type={'text'} ref={mylist}></input>

        </div>
    );
}

export default ReduxReact;