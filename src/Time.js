import React, { useEffect, useState } from "react";

function Time() {
  let [state, setState] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    console.log("Event started");
    const id = setInterval(() => {
      setState(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(id);
      console.log("Event ended");
    };
  }, []);
  return <div className="time">Time is : {state}</div>;
}

export default Time;
