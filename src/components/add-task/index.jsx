import { useState } from "react";

export const AddTask = ({ AddTask }) => {
  const [ task, setTask ] = useState("");
  return (
    <div className="container m-2 p-2">
    <div className="row ">
      <div className="col-md-10 offset-md-1">
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          placeholder="add task"
          className="form-control"
          // value={task ? task : ""}
        />
      </div>
      <div className="col-md-2 offset-md-5">
        <button
          onClick={() => {
            AddTask(task);
            setTask("");
          }}
          className="btn btn-primary"
        >
          Add task
        </button>
      </div>
    </div>
    </div>
  );
};
