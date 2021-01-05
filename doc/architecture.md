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

  - **component Button**
    - _props:_ icon

Still to be checked: what to do with the handlers.
