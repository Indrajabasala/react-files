import React from "react"

const SelectFiles=()=>{

    const previewFile=() =>{
        const preview = document.querySelector('img');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
      
        reader.addEventListener("load", function () {
          // convert image file to base64 string
          preview.src = reader.result;
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }



    return(
        <div>
        <input type="file" onchange={previewFile()}/><br/>
     <img src="" height="200" alt="Image preview..."></img>

        </div>
    )
}

export default SelectFiles
