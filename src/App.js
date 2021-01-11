import "./App.css";
import { TodoList } from "./components/TodoList";

const defaultTasks = [
  { id: "1", title: "Become a youtuber", checked: false },
  { id: "2", title: "Explain stuff to Elie", checked: false },
  { id: "3", title: "Use lack of sleep as an excuse", checked: false },
];
export default function App() {
  return (
    <div className="main">
      <h1>
        <span>NOT</span>
        <span>todo</span>
        <span>LIST</span>
      </h1>
      <ol id="instructions">
        <li>Write down things not to do.</li>
        <li>
          If someone asks you to do said thing, just reply with: "Sorry, but
          that's on my Not Todo List."
        </li>
        <li>
          If you successfully avoided doing said thing, cross it of your list.
        </li>
      </ol>
      <TodoList tasks={defaultTasks} />
      <i className="license">
        icons by fontawesome -{" "}
        <a href="https://fontawesome.com/license">license</a>
      </i>
    </div>
  );
}
