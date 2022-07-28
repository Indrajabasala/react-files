import React, { useState } from "react";

const MultiFiles = () => {
  const [data, setData] = useState([{
    documentName: "",
    file: [],
  }]);

  const { documentName = "", file = [] } = data;
  const [fileSave,setFileSave]=useState([])

  const handleChange = ({ target: { name, value } }) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];

    setData({
      ...data,
      file,
    });
  };

  const handleDocSubmit = (e) => {
    e.preventDefault();

    let formValue = new FormData();
    formValue.append("documentName", data.documentName);
    formValue.append("file", data.file);
    setFileSave([
        ...fileSave,
        data
    ])
  };
  console.log("fileeeeeeee",fileSave)

  return (
    <>
      <div className="custom-modal-modal-header">
        <h4 className="custom-modal-modal-title">ADD Document </h4>
      </div>
      <div className="custom-modal-modal-body">
        <form autoComplete="off">
          <div class="row">
            <div class="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-xs-12">
              <div class="custom-form-group form-group  ">
                <input
                  className="input-field"
                  type="text"
                  value={documentName}
                  placeholder="Document Name"
                  name="documentName"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="custom-upload-btn custom-form-group form-group  ">
                <div className="file-upload-wrapper">
                  <input
                    name="file"
                    // accept=".pdf,image/*"
                    type="file"
                    className="file-upload-field"
                    onChange={handleFile}
                    multiple
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <button type="button" onClick={handleDocSubmit}>
          Add
        </button>
      </div>
    

{fileSave.map((details,image) => {
        return <img key={image} src={details.name}  />
      })}
    </>
  );
};

export default MultiFiles;
