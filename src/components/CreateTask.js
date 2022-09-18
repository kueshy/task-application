import React from "react";

const CreateTask = ({ title, setTitle, submitTask }) => {
  return (
    <div>
      <div>
        <form className="input" action="">
          <h1>Create Task</h1>
          <input
            type="text"
            className="input__box"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="input__button" onClick={submitTask}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
