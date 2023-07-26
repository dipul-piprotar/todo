import React, { useMemo, useState } from 'react'

function UseMemoState() {
    const [add,setadd]=useState(0);
    const[minus,setminus]=useState(50);

const addFun =()=>{
setadd(add+1)
console.log("m+++++++");
}
const minusFun=()=>{
        setminus(minus-1)
        console.log("minus------");
}
const multiply =useMemo(()=>{
    console.log("*********");
    return add*5 ;

},[add])


  return (
    <><div>
        <h1>{multiply}</h1>
    <h2>{add}</h2>
    <button onClick={addFun}>add</button>
    <br/>
    <h2>{minus}</h2>
    <button onClick={minusFun}>minus</button></div>
    </>
  )
}

export default UseMemoState