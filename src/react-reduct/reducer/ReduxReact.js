import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

import { decrement, increment, incrementByValue } from './counter';

import { addList } from './AddtoList';
import { initializeAx, setError, statusState } from './AxiosCounter';
import { api } from '../../../api';
import { store } from '../../Reduxonly';

function ReduxReact() {
    const getAsync = useSelector((state) => state.AsyncApi.count)
    let { counter: { count }, MyList: { mylist }, AsyncApi: { status, error } } = useSelector(state => state)
    // let [progress, setProgress] = useState(null)
    const input = useRef()
    const mylists = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        store.subscribe(() => console.log(store.getState()))
    }, [false])

    function addtoList() {
        const data = mylists.current.value
        if (data) {
            dispatch(addList(data))
        }
    }

    function asyncInc() {
        if (status === 'done') {
            dispatch(statusState('loading'))
            api.patch('counter/1', { count: getAsync + 1 })
                .then((res) => {
                    dispatch(statusState('done'));
                    dispatch(initializeAx(res.data.count))
                })
                .catch(err => {
                    store.dispatch(setError(err.message))
                    store.dispatch(statusState('error'))
                })
        }
        else {
            alert('wait till previous process end')
        }
    }

    return (
        <div>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <input type={'number'} ref={input}></input>
            <button onClick={() => { input.current.value && dispatch(incrementByValue(Number(input.current.value))) }}>Add</button><br /><br />
            <input type={'text'} ref={mylists}></input>
            <button onClick={addtoList}>Add to List</button>

            {mylist.map((val, index) => <li key={index}>{val}</li>)}<br /><br /><br />

            <div>status : {status}</div><br />
            <button onClick={asyncInc}>+</button><br />
            {String(getAsync)}
            {error && <div>Error occured :  {error}</div>}
            
            {/* <div>
                <button onClick={() => { axios.request({ method: 'GET', url: '/vid.mp4', onDownloadProgress: (p) => { setProgress(p.progress) } }) }}>Download</button>
                <progress value={progress}></progress>
            </div> */}
        </div>
    );
}

export default ReduxReact;