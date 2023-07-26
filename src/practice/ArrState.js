import React,{useState} from 'react'

function ArrState() {
  
    const [data, managedata] = useState([{ val: 20 }]);
    const dip = () => {
      managedata([...data,
        {
          val: Math.random(),
        },
      ]);
    };
    return (
      <>
        <ul>
          {data.map((item) => (
            <li key={item.length}>{item.val}</li>
          ))}
        </ul>
        <button onClick={dip}>data</button>
      </>
    );
  
}

export default ArrState