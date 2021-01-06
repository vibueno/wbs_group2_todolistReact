import React from 'react';
import './styles.css' ;


export default function ToDoTask({title, id}) {




    return (

            <li  id={id}>

                <input className="text" value={title} />
                <span className="bttn delete"></span>
                <span className="bttn edit"></span>
            </li>
    );
  }