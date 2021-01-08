import React, { useState } from "react";
import "./styles.css";

export default function NewTaskForm({ addTaskHandler }) {
  let [newTaskTitle, setNewTaskTitle] = useState("");

  return (
    <>
      <form
        className="inputArea"
        onSubmit={(e) => {
          e.preventDefault();

          if (`${newTaskTitle}`.replace(/\s/g, "") === "") {
            alert("Please enter a task");
          } else {
            addTaskHandler(newTaskTitle);
            setNewTaskTitle("");
          }
        }}
      >
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Your no-Task here"
        />

        <button type="submit" disabled={newTaskTitle === ""}>
          Add
        </button>
      </form>
    </>
  );
}
