import React from "react";
import ReactDOM from "react-dom";

import TaskList from "./components/TaskList";
import { TASKS } from "./Constants";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <TaskList tasks={TASKS} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
