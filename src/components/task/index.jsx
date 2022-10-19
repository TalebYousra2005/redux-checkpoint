import {useNavigate} from "react-router-dom"
export const TaskCard = ({ el, RemoveTask, CompleteTask }) => {
  const navigate = useNavigate()
  return (
    <div className="card m-5 p-3">
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            {el.isFinished ? (
              <h3 className="card-title">
                <del>{el.title}</del>
              </h3>
            ) : (
              <h3 className="card-title">{el.title}</h3>
            )}
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-danger m-2"
              onClick={() => {
                RemoveTask(el.id);
              }}
            >
              remove
            </button>
            {!el.isFinished && (
              <button
                className="btn btn-success m-2"
                onClick={() => {
                  CompleteTask(el.id);
                }}
              >
                complete
              </button>
            )}
            <button
              className="btn btn-primary m-2"
              onClick={() => {
                navigate(`/edit-task/${el.id}`)
              }}
            >
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
