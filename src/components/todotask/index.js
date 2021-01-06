import React from 'react';


export default function ToDoTask({title, id}) {




    return (

            <div className="div-task" id={id}>
                <p>{title}</p>
                <button>Delete</button>
                <button>Edit</button>
            </div>
    );
  }