import React, { useState } from "react";
import TodoTask from "../TodoTask";

export function TodoList({ tasks }) {
    const [taskList, setTaskList] = useState(tasks);
    const deleteTask = (id) => {
        console.log(id + " deleted(mock)");
    };
    const addTask = (title, id) => {
        console.log(`added new task with title:${title} and id:${id}`);
    };
    const checkTask = (id) => {
        console.log(id + " checked (mock)");
    };
    return (
        <div>
            <p>What are you NOT doing today:</p>
            {/*<NewTaskForm addTaskHandler={addTask} />*/}
            <p>Things not to do:</p>
            <ul id="task-list">
                {taskList.map((task) => (
                    <TodoTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        onDelete={deleteTask}
                    />
                ))}
            </ul>
        </div>
    );
}
