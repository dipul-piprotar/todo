import React from 'react'
import PrintApi from './PrintApi';

function Movietemplate(props) {
   console.log(props.moviev);
  return (
   <>
   {props.moviev.map((e)=>{
    return(
    <PrintApi a={e.title} d={e.opening_crawl} key={e.id}/>  
 
    )
   })}
   
   </>
  )
}

export default Movietemplate