import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import SwitchSelector from "react-switch-selector";
import Patients from "./patients";
import Providers from "./providers";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ToggleDetails = () => {
  const history = useHistory();
  const [state, setState] = useState("");

  const options = [
    {
      label: "patient",
      value: "patient",
      selectedBackgroundColor: "#0097e6",
    },
    {
      label: "provider",
      value: "provider",
      selectedBackgroundColor: "#0097e6",
    },
  ];

  const handleChange = (value) => {
    setState({ value });
  };

  // useEffect(() => {
  //   if (state.value === "patient") {
  //     history.push("/toggle/patients");
  //   } else if (state.value === "provider") {
  //     history.push("/toggle/providers");
  //   } else {
  //     history.push("/toggle");
  //   }
  // }, [state]);

  console.log("indexxxxxxxx", state.value);

  return (
    <div>
      <h2>details</h2>
      <div className="your-required-wrapper" style={{ width: 200, height: 50 }}>
        <SwitchSelector
          onChange={handleChange}
          options={options}
          value={options.value}
          // initialSelectedIndex={initialSelectedIndex}
          // backgroundColor={"#353b48"}
          fontColor={"black"}
        />
      </div>
      <div>
        {state.value === "patient" ? (
          <Patients />
        ) : state.value === "provider" ? (
          <Providers />
        ) : (
          <Patients />
        )}
      </div>
    </div>
  );
};

export default ToggleDetails;
