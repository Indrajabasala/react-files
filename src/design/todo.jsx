import React, { useState } from "react";

const TodoList = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    lastName: "",
  });

  const [persons, setPersons] = useState([]);

  let { fullName = "", email = "", lastName = "" } = data;

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSave = (e) => {
    setPersons([...persons, data]);
    setData("");
  };

  return (
    <>
      <h3> To Do List </h3>
      <div >
      <input
        type="text"
        placeholder="fullName"
        name="fullName"
        value={fullName}
        onChange={handleChange}
        
      />
      <input
        type="text"
        placeholder="lastName"
        name="lastName"
        value={lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <button onClick={handleSave}>Save</button>
      </div>
      <div className="list-container">
          <ul className="list">
            
      {persons.map((details) => {
        return <li>{details.fullName + "-----" + details.email}</li>;
      })}
      
        </ul>
      </div>
    </>
  );
};
export default TodoList;
