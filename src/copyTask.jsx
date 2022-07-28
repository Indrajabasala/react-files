import React, { useState, useEffect, useRef } from "react";
const moule1Array = [
  "Albania",
  "Afghanistan",
  "Algeria",
  "American Samoa",
  "AndorrA",
  "Angola",
];

const CopyModule = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [moduleToPaste, setModuleToPaste] = useState("");
  const [moduleNumber, setModuleNumber] = useState(0);
  const [copyValue, setCopyValue] = useState("");
  const [moduleOne, setModuleOne] = useState(moule1Array);

  const [moduleTwo, setModuleTwo] = useState([]);
  const [moduleThree, setModuleThree] = useState([]);

  const ref = useRef(null);
  const ref2 = useRef(null);

  const handleCopy = () => {
   
    setCopyValue(selectedItem);
    alert("copied");
  };

  const handlePaste = (e) => {
    
    if (moduleToPaste === "one") {
      setModuleOne([...moduleOne, copyValue]);
    } else if (moduleToPaste === "two") {
      setModuleTwo([...moduleTwo, copyValue]);
    } else if (moduleToPaste === "three") {
      setModuleThree([...moduleThree, copyValue]);
    }
  };

  useEffect(() => {
    const listener = (event) => {
      const { keyCode, ctrlKey } = event;
      console.log("checkbvvvv", keyCode);
      if (keyCode === 67 && ctrlKey) {
        setCopyValue(selectedItem);
        alert("copied");
        return;
      } else {
        return;
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [selectedItem]);


  useEffect(() => {
    const listener = (event) => {
      const { keyCode, ctrlKey } = event;
      console.log("checkbvvvv", keyCode);
      if (keyCode === 86 && ctrlKey) {
        handlePaste()
        return;
      } else {
        return;
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [handlePaste]);




  //   console.log("checkbvvvv", selectedItem);
  //   console.log("m22222", moduleTwoCheckBox);
  return (
    <>
      <div className="container-fluid p-3 bg-primary text-white text-center">
        <h1> Task </h1>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-sm-6">
          <button
            class="primary-button commonsavebtn"
            disabled={!selectedItem}
            onClick={handleCopy}
            className={!selectedItem ? "customdisabledRedbtn" : "copy-btn"}
          >
            Copy
          </button>
        </div>
        <div className="col-sm-6">
          <button
            class="primary-button commonsavebtn"
            disabled={!copyValue || !moduleToPaste}
            className={
              !copyValue || !moduleToPaste ? "customdisabledRedbtn" : "copy-btn"
            }
            onClick={handlePaste}
          >
            paste
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <input
              type="checkbox"
              name="module1"
              id="module1"
              className="custom-checkbox"
              checked={moduleToPaste === "one"}
              onClick={() => setModuleToPaste("one")}
            />
            <label htmlFor="module1"></label>
            <div
              className="card"
              style={{ width: "400px", height: "500px", borderColor: "blue" }}
            >
              <h3>Module 1</h3>
              <div class="custom-checkbox-section">
                {moduleOne.map((moduleName, index) => {
                  return (
                    <div class="custom-checkbox-options ">
                      <ul>
                        <li
                          className={
                            selectedItem === moduleName && moduleNumber === 1
                              ? "selected"
                              : ""
                          }
                          onClick={() => {
                            setModuleNumber(1);
                            setSelectedItem(moduleName);
                          }}
                        >
                          {" "}
                          {moduleName}{" "}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <input
              type="checkbox"
              name="module1"
              id="module1"
              className="custom-checkbox"
              checked={moduleToPaste === "two"}
              onClick={() => setModuleToPaste("two")}
            />
            <label htmlFor="module1"></label>

            <div
              className="card"
              style={{ width: "400px", height: "500px", borderColor: "blue" }}
            >
              <h3>Module 2</h3>

              <div class="custom-checkbox-section">
                {moduleTwo.map((moduleName, index) => {
                  return (
                    <div class="custom-checkbox-options">
                      <ul>
                        <li
                          className={
                            selectedItem === moduleName && moduleNumber === 2
                              ? "selected"
                              : ""
                          }
                          onClick={() => {
                            setModuleNumber(2);
                            setSelectedItem(moduleName);
                          }}
                        >
                          {moduleName}{" "}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <input
              type="checkbox"
              name="module1"
              id="module1"
              className="custom-checkbox"
              checked={moduleToPaste === "three"}
              onClick={() => setModuleToPaste("three")}
            />
            <label htmlFor="module1"></label>
            <div
              className="card"
              style={{ width: "400px", height: "500px", borderColor: "blue" }}
            >
              <h3>Module 3</h3>

              <div class="custom-checkbox-section">
                {moduleThree.map((moduleName, index) => {
                  return (
                    <div class="custom-checkbox-options">
                      <ul>
                        <li
                          className={
                            selectedItem === moduleName && moduleNumber === 3
                              ? "selected"
                              : ""
                          }
                          onClick={() => {
                            setModuleNumber(3);
                            setSelectedItem(moduleName);
                          }}
                        >
                          {moduleName}{" "}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyModule;
