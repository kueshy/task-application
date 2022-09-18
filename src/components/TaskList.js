import React from "react";
import SingleTask from "./SingleTask";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <div key={task.id}>
          <SingleTask
            task={task}
            key={task.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
