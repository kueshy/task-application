import React, { useState } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitTask = (e) => {
    e.preventDefault();
    if (title) {
      setTasks([...tasks, { id: Date.now(), title }]);
    }
    setTitle("");
  };

  return (
    <div className="">
      <div>
        <CreateTask title={title} setTitle={setTitle} submitTask={submitTask} />
      </div>
      <div>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default HomePage;
