import React, { useState, useRef } from "react";
import "./styles";

export default function NewTaskForm({ id, addTaskHandler }) {
  let [newTaskTitle, setNewTaskTitle] = useState("");
  const inputEl = useRef(null);
  return (
    <>
      <form
        className="inputArea"
        onSubmit={(e) => {
          e.preventDefault();
          setNewTaskTitle(inputEl.current.value);

          if (`${newTaskTitle}`.replace(/\s/g, "") == "") {
            alert("Please enter a task");
          } else {
            addTaskHandler(id, newTaskTitle);
            setNewTaskTitle("");
          }
        }}
      >
        <input
          id="input"
          ref={inputEl}
          type="text"
          placeholder="Write down a Task only if it is to do a Cocktail to Elie => the Teacher of Georg, Victor and Aria "
        />

        <button type="submit" id="add">
          Add
        </button>
      </form>
    </>
  );
}
