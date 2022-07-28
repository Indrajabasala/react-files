import React, { useEffect, useState } from "react";
import InputTypes from "./InputTypes";

const painDisordersArray = [
  "Acute Pain",
  "Chronic Pain",
  "Fibromyalgia",
  "Generalized",
  "Inflammatory Pain",
  "Neuropathic Pain",
];

const Selectinputs = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    mobileNo: "",
    email: "",
    passWord: "",
  });

  let {
    firstName = "",
    lastName = "",
    gender = "",
    mobileNo = "",
    email = "",
    passWord = "",
  } = data;

  const [painDisorder, setPainDisorder] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((previousData) => ({ ...previousData, [name]: value }));
  };
  console.log("inputttttttttt", data, painDisorder);

  return (
    <>
      <div>
        <h2 style={{ color: "blue" }}>Input Types</h2>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-4 col-xs-12">
          <div class="form-group">
            <InputTypes
              name="firstName"
              onChange={handleInput}
              type="text"
              placeholder_input={"firstName"}
              value_select={firstName}
              label={"firstName"}
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-4 col-xs-12">
          <div class="form-group">
            <InputTypes
              name="lastName"
              onChange={handleInput}
              type="text"
              placeholder_input={"lastName"}
              value_select={lastName}
              label={"lastName"}
            />
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-4 col-xs-12">
          <div class="form-group">
            <InputTypes
              name="mobileNo"
              onChange={handleInput}
              type="number"
              placeholder_input={"mobileNo"}
              value_select={mobileNo}
              label={"mobileNo"}
            />
          </div>
        </div>
      </div>
      <br />

      <div class="row">
        <div class="col-lg-4 col-md-4 col-xl-4 col-sm-4 col-xs-12">
          <div class="form-group">
            <label class="common-label" for="fname">
              Pain Disorders
            </label>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12 col-xs-12">
          <div class="checkbox-height-auto custom-checkbox-section checkbox-padding">
            {painDisordersArray.map((pain, index) => {
              return (
                <div>
                  <InputTypes
                    name="painDisorder"
                    onChange={() => {
                      setPainDisorder(pain === painDisorder ? null : pain);
                    }}
                    type="checkbox"
                    checked={pain === painDisorder ? true : false}
                    placeholder_input={"painDisorder"}
                    value_select={painDisorder}
                    label={"painDisorder"}
                  />
                  <label className="label-padding" for={pain + "pain"}>
                    {pain}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Selectinputs;
