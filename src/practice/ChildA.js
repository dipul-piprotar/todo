import {React,memo} from 'react'

function ChildA(props) {
    console.log("i am child a component" +props.learning);
  return (
  <>
 
  </>
  )
}

export default memo(ChildA)