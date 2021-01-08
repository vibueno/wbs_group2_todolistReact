import React, { useState } from "react";
import TodoTask from "../TodoTask";
import NewTaskForm from "../NewTaskForm";
import { nanoid } from "nanoid";

export function TodoList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const deleteTask = (id) => {
    const index = taskList.findIndex((task) => task.id === id);
    taskList.splice(index, 1);
    setTaskList([...taskList]);
  };

  const addTask = (title) => {
    const id = "LI-" + nanoid(10);
    const newTaskList = [{ id: id, title: title, checked: false }, ...taskList];
    setTaskList(newTaskList);
  };

  const editTask = (id, newTitle) => {
    const index = taskList.findIndex((task) => task.id === id);
    taskList[index].title = newTitle;
    setTaskList([...taskList]);
  };
  const checkTask = (id) => {
    const index = taskList.findIndex((task) => task.id === id);
    taskList[index].checked = !taskList[index].checked;
    setTaskList([...taskList]);
  };

  return (
    <div>
      <p>What are you NOT doing today:</p>
      <NewTaskForm addTaskHandler={addTask} />
      <p>Things not to do:</p>
      <ul id="task-list">
        {taskList.map((task) => (
          <TodoTask
            key={task.id}
            id={task.id}
            title={task.title}
            checked = {task.checked}
            deleteTaskHandler={() => {
              deleteTask(task.id);
            }}
            editTaskHandler={(title) => {
              editTask(task.id, title);
            }}
            checkTaskHandler={() => {
              checkTask(task.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
