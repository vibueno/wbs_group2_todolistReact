import React, { useState } from "react";
import "./styles.css";

export default function TodoTask({ title, id, checked, deleteTaskHandler, editTaskHandler, checkTaskHandler}) {

  const [inputValue, setInputValue] = useState(title);
  const [editMode, setEditMode] = useState(false);




  return (
    <li id={id} className={checked ? "checked" : ""} onClick={(e)=>{
      if(!editMode && !e.target.classList.contains("bttn")) {
        console.log(id);
        checkTaskHandler();
      }
    }}>
      
      {!editMode ? (
        <>
          <span className="text">{title}</span>
          <span
            className="bttn edit"
            onClick={() => setEditMode(true)}
          ></span>
          <span
            className="bttn delete"
            onClick={() => {
              deleteTaskHandler();
            }}
          ></span>
        </>
      ) : (
        <>
          <input className="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <span
            className="bttn confirm"
            onClick={() => {
              editTaskHandler(inputValue);
              setEditMode(false);
            }}
          ></span>
          <span
            className="bttn abort"
            onClick={() => setEditMode(false)}
          ></span>
        </>
        
      )}
    </li>
  );
}
