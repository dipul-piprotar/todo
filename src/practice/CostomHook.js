import React from 'react'
import useCostom from './useCostom'


function CostomHook() {
 const [count,increment,decrement]=useCostom()

  return(
    <>
    <h3>{count}</h3>
    <button onClick={increment}>add</button>
    <button onClick={decrement}>minus</button>
    </>
  )
}

export default CostomHook