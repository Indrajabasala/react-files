import React, { useState, useEffect, useRef } from "react";

const array1 = [
  "Albania",
  "Afghanistan",
  "Algeria",
  "American Samoa",
  "AndorrA",
  "Angsla",
  "Angdla",
  "Anggla",
  "Anghla",
  "Anglla",
];

const CopyRange = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const onSelectItems = (e, element, index) => {
    if (e.ctrlKey) {
      if (selectedItems.includes(element)) {
        selectedItems.splice(index, 1);
        setSelectedItems([...selectedItems]);
      } else {
        setSelectedItems([...selectedItems, element]);
      }
    } else if (e.shiftKey) {
        let list = [...selectedItems];
      if (selectedItems?.length > 0 && selectedIndex > -1) {
        
        if (selectedIndex <= index) {
          for (var i = selectedIndex + 1; i <= index; i++) {
            list.push(array1[i]);
          }
        } else {
            list.length=0;
          for (var i = index; i <= selectedIndex; i++) {
            list.push(array1[i]);
          }
        }
       
      } else {
        for (var i = 0; i <= index; i++) {
          list.push(array1[i]);
        }
        setSelectedItems([...list]);
      }
    } else {
      setSelectedItems([element]);
      setSelectedIndex(index);
    }
  };

  return (
    <>
      <div className="container-fluid p-2 bg-primary text-white text-center">
        <h1> Task </h1>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        {array1.map((element, index) => {
          return (
            <li
              onClick={(e) => onSelectItems(e, element, index)}
              className={selectedItems.includes(element) ? "selected" : ""}
            >
              {" "}
              {element}
            </li>
          );
        })}
      </div>
    </>
  );
};
export default CopyRange;
