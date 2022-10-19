import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tasks } from "../../data";
export const EditingCard = ({ ChangeTitle }) => {
  const params = useParams();
  const selectedTask = Tasks.find((tsk) => {
    return (tsk.id = params.id);
  });
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="container m-2 p-2">
        <div className="row ">
          <div className="col-md-10 offset-md-1">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="write the new title"
              className="form-control"
              value={title ? title : ""}
            />
          </div>
          <div className="col-md-2 offset-md-5">
            <button
              onClick={() => {
                ChangeTitle(title);
                selectedTask.title = title;
                setTitle("");
              }}
              className="btn btn-success"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
