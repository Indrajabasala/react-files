import React,{useState} from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

const LearnPrint = () => {

  const [searchCon,setSearchCon]=useState({
    search:""
  })

  let {
    search=""
  }=data

const [data,setData]=useState({
  email:"",
  password:""
})
let {
  email="",
  password=""
}=data

const handleChange = (e) => {
  e.preventDefault();
  const { name, value } = e.target;
  setData((previousData) => ({ ...previousData, [name]: value }));
};

const handleCountry=(e)=>{
  e.preventDefault();
const {name,value}=e.target;
setSearchCon((previousData)=>({...previousData,[name]:value}))
}

  return (
    <>
    <div>
      <h2> this is a function</h2>
      <button onClick={() => window.print()}>PRINT</button>
      <p>Click above button opens print preview with these words on page</p>
    </div>

   <input type="text" name="email" value={email.toLowerCase()} onChange={handleChange} />
   <input type="text" name="password" value={password.toUpperCase()} onChange={handleChange} />
   <div>
     <input type="text" name="search" value={search} label="Search Country" icon="search" onChange={handleCountry}/>
   </div>

   </>
  );
};

export default LearnPrint;
