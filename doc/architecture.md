# Architecture

- **component TodoList**

  - <span style="color:blue">function</span> addTask
  - <span style="color:blue">function</span> editTask
  - <span style="color:blue">function</span> checkTask
  - <span style="color:blue">function</span> deleteTask

  - <span style="color:green">state:</span> todoList: [TodoItem]

  - **component NewTaskForm**

    - <span style="color:green">state:</span> newTaskTitle
    - <span style="color:orange">props:</span> id~~, title~~

  - **component TodoItem**

    - <span style="color:green">state:</span> editMode: true/false
    - <span style="color:orange">props:</span> id, title

    - **component Button**
      - <span style="color:orange">props:</span> icon

Still to be checked: what to do with the handlers.
