import React from "react";
import { useParams } from "react-router-dom";

function Routerdata() {
  const prams = useParams();
  console.log(prams);
  return <div>URL Prams : {prams.nested}</div>;
}

export default Routerdata;
