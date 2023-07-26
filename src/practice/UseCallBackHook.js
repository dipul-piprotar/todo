import React, { useCallback, useState } from "react";
import ChildA from "./ChildA";

function UseCallBackHook() {
    const [add,setadd] =useState(0)
    const changeHandle =()=>{
        setadd(add+1)
    }
    const  data = "dipul"
    const learning =useCallback(()=>{

    },[]);
  return (
    <>
      <ChildA val ={learning}/>
      <h3>{add}</h3>
      <button onClick={changeHandle}>++</button>
    </>
  );
}

export default UseCallBackHook;
