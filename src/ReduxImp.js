import React, { useState } from 'react';
import { incremented, store } from './Reduxonly';
import {store as store2} from './redux/StoreCreater'

function ReduxImp() {
    let [state,setState]=useState(store.getState().value)
    console.log(store2);
    
    return (
        <div>
            Redux <button onClick={()=>{store.dispatch(incremented()); setState(store.getState().value)}}>Inc</button> {state}
        </div>
    );
}

export default ReduxImp;