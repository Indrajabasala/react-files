import React, { useEffect, useState } from "react";

const LoaderText = () => {

    const [data,setData]=useState({
        firstName:"",
        lastName:""
    })

    let {
        firstName="",
        lastName=""
    }=data

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData((previousData) => ({ ...previousData, [name]: value }));
      }; 


  return (
    <>
    <input type="text" name="firstName" value={firstName} onChange={handleChange}/>
    <input type="text" name="lastName" value={lastName} onChange={handleChange}/>
    <button onClick={handleSave}>Save</button>

   
    </>
  );
};

export default LoaderText;