import React from "react";

const InputTypes = ({ type, placeholder_input, value_select, ...rest }) => {
  return (
    <>
      <div>
        {type === "text"  || type === "number" && (
          <input
            type={type}
            value={value_select}
            placeholder={placeholder_input}
            {...rest}
          />
        )}
      
        <div className="checkbox-height-auto custom-checkbox-section checkbox-padding">
         {type === "checkbox" && (
          <input
          class="custom-checkbox"
            type="checkbox"
            value={value_select}
            {...rest}
            placeholder={placeholder_input}
          />
        )}
        </div>
      </div>
    </>
  );
};

export default InputTypes;
