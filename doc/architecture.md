# Architecture

**component TodoList**

- _function_ addTask
- _function_ editTask
- _function_ checkTask
- _function_ deleteTask

- _state:_ todoList: [TodoItem]
- _state:_ nextId: Number

- **component NewTaskForm**

  - _state:_ newTaskTitle
  - _props:_ id, ~~title~~

- **component TodoItem**

  - _state:_ editMode: true/false
  - _props:_ id, title

  - **component TaskButton**
    - _props:_ icon

Pending:

- How to manage event handlers
- Where to store addTask, editTask, checkTask, deleteTask:

  - In the component TodoList, as described above
  - In a separate js file in the src folder
  - Inside a separate js file for each component

    Not sure if all these approaches are valid. What seems clear right now is that they will be imported into the TodoList component if they are stored in a different file
