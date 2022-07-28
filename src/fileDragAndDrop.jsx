import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

// const fileTypes = ["JPG", "PNG", "GIF","JFIF"];

const DragDrop = () => {
  const [files, setFile] = useState([]);

  const handleChange = (file) => {
    // setFile(URL.createObjectURL(file[0]));
    // setFile((previousData) => ({ ...previousData, file }));
    var file = file;
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function () {
      setFile([reader.result]);
    };
  };

  const imgConvert = (value) => {
    const buff = Buffer(value, "base64");
    const result = buff.toString("base64");
    return result;
  };

  console.log("fileeee", files);
  return (
    <div style={{ marginLeft: "500px" }}>
      <FileUploader handleChange={handleChange} name="file" maxSize="2mb" />
      {/* 
      {files &&
        files?.map((file) => {
          return <img src={`data:image/jpg;base64,${imgConvert(file)}`} />;
        })} */}
      <img src={files} />
    </div>
  );
};

export default DragDrop;
