import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const SingleTask = ({ task, tasks, setTasks }) => {
  const [edit, setEdit] = useState(false);
  const [editTask, setEditTask] = useState(task.title);

  const handleEdit = (e, id) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <div>
      <form className="tasks-single" onSubmit={(e) => handleEdit(e, task.id)}>
        {edit ? (
          <input
            ref={inputRef}
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
            className="tasks-text"
          />
        ) : (
          <span className="tasks-text">{task.title}</span>
        )}
        <div className="btn-action">
          <span
            className="btn-act"
            onClick={() => {
              if (!edit) {
                setEdit(!edit);
              }
            }}
          >
            Edit
          </span>
          <span className="btn-act" onClick={() => handleDelete(task.id)}>
            Delete
          </span>
        </div>
      </form>
    </div>
  );
};

export default SingleTask;
