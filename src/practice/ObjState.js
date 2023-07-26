import React,{useState} from 'react'

function ObjState() {
    const [data, updatedata] = useState({
        user: "abc@12",
        password: 12345,
        email: "dcba@mail",
      });
    
      const updatetobutton = () => {
        updatedata({ ...data, user: "dipul#321", password: "9458546" });
      };
      return (
        <>
          <h3>
            here{" "}
            {`username is ${data.user} and its pass is ${data.password} and its emial is a ${data.email}`}
          </h3>
          <button onClick={updatetobutton}>chnage data</button>
        </>
      );
}

export default ObjState