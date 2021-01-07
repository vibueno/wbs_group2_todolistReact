import React from "react";
import "./styles.css";

export default function TodoTask({ title, id, checked, deleteTaskHandler }) {
  return (
    <li id={id} className={checked ? "checked" : ""}>
      <input className="text" value={title} />
      <span
        className="bttn delete"
        onClick={() => {
          deleteTaskHandler();
        }}
      ></span>
      <span className="bttn edit"></span>
    </li>
  );
}
