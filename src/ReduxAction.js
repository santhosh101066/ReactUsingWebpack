import React, { createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ReduxAction() {
  const dispatch = useDispatch();
  const {
    Action: { list },
  } = useSelector((state) => state);
  const inputRef = createRef();

  function addToList() {
    dispatch({ type: "list/Add", payload: inputRef.current.value });
    inputRef.current.value = "";
  }

  function removeFromList(index) {
    dispatch({ type: "list/Remove", payload: index });
  }

  return (
    <div>
      <input type={"text"} ref={inputRef} />{" "}
      <button onClick={addToList}>To add</button>
      <ul>
        {list.map((val, index) => (
          <li key={index}>
            {val}{" "}
            <button
              onClick={() => {
                removeFromList(index);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReduxAction;
