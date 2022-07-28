import React, { useEffect, useState } from "react";

const DragandDrop = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    const dropArea = document.getElementById("drop-area");
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropArea.addEventListener(eventName, preventDefaults(), false);
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      dropArea.addEventListener(eventName, highlight(), false);
    });

    ["dragleave", "drop"].forEach((eventName) => {
      dropArea.addEventListener(eventName, unHightLight(), false);
    });

    dropArea.addEventListener("drop", handleDrop(), false);
  }, []);

  useEffect(() => {
    const dropArea = document.getElementById("drop-area");
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropArea.removeEventListener(eventName, preventDefaults(), false);
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      dropArea.removeEventListener(eventName, highlight(), false);
    });

    ["dragleave", "drop"].forEach((eventName) => {
      dropArea.removeEventListener(eventName, unHightLight(), false);
    });

    dropArea.removeEventListener("drop", handleDrop(), false);
  }, []);

  const preventDefaults = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
  };

  const highlight = () => {
    const ele = document.querySelector(".upload-label");
    if (ele) {
      ele.style.backgroundColor = "#e9e9e9";
      ele.style.border = "2px dotted #999";
    }
  };

  const unHightLight = () => {
    const ele = document.querySelector(".upload-label");
    if (ele) {
      ele.style.backgroundColor = "#f6f6f6";
      ele.style.border = "unset";
    }
  };

  const handleDrop = (e) => {
    const dt = e?.dataTransfer;
    if (dt) {
      const { files } = dt;
      handleFiles(files);
    }
  };

  const handleFiles = (files) => {
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = function () {
      let img = document.createElement("img");
      img.src = reader.result;
      img.className = "image";
      document.getElementById("drop-area").appendChild(img);
    };
  };
  return (
    <>
      <div
        id="drop-area"
        style={{ marginLeft: "400px", marginTop: "50px", width:"100% "}}
      >
        <input
          type="file"
          id="fileElem"
          accept="image/*"
          onChange={(e) => {
            handleFiles(e.target.files);
          }}
        />
        <label className="upload-label" htmlFor="fileElem">
          <div className="upload-text">Drag Image here or click to upload</div>
        </label>
        <div className="image" />
      </div>
    </>
  );
};

export default DragandDrop;

// import React, {useState,useEffect,useRef } from 'react'

// const  DragAndDrop =()=> {
//   const [state,setState]=useState({
//     drag: false
//   })
//   const [dragCounter,setDragCounter]=useState("")

//   const dropRef = useRef(null);
//   // dropRef = React.createRef()

//    const handleDrag = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//   }
//  const  handleDragIn = (e) => {
//     e?.preventDefault()
//     e?.stopPropagation()
//     setDragCounter(dragCounter++)
//     if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
//       setState({drag: true})
//     }
//   }
//    const handleDragOut = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     setDragCounter(dragCounter--)
//     if (dragCounter === 0) {
//       setState({drag: false})
//     }
//   }
//   const handleDrop = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     setState({drag: false})
//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//     handleDrop(e.dataTransfer.files)
//       e.dataTransfer.clearData()
//       setDragCounter(dragCounter = 0 )
//     }
//   }

//   useEffect(() => {
//     let div = dropRef.current
//     div.addEventListener('dragenter', handleDragIn())
//     div.addEventListener('dragleave', handleDragOut())
//     div.addEventListener('dragover', handleDrag())
//     div.addEventListener('drop', handleDrop())

//   }, []);

//   useEffect(() => {
//     let div = dropRef.current
//     div.removeEventListener('dragenter', handleDragIn())
//     div.removeEventListener('dragleave', handleDragOut())
//     div.removeEventListener('dragover', handleDrag())
//     div.removeEventListener('drop', handleDrop())
//   }, []);

//     return (
//       <div
//         style={{display: 'inline-block', position: 'relative'}}
//         ref={dropRef}
//       >
//         {state.dragging &&
//           <div
//             style={{
//               border: 'dashed grey 4px',
//               backgroundColor: 'rgba(255,255,255,.8)',
//               position: 'absolute',
//               top: 0,
//               bottom: 0,
//               left: 0,
//               right: 0,
//               zIndex: 9999
//             }}
//           >
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 right: 0,
//                 left: 0,
//                 textAlign: 'center',
//                 color: 'grey',
//                 fontSize: 36
//               }}
//             >
//               <div>drop here :)</div>
//             </div>
//           </div>
//         }
//         {/* {this.props.children} */}
//       </div>
//     )

// }
// export default DragAndDrop
