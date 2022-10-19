export const SearchTask = ({ SetFilter = () => {} }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <input
            type="text"
            onChange={(e) => SetFilter(e.target.value)}
            className="form-control m-2 p-2"
            placeholder="search your task"
          />
        </div>
      </div>
    </div>
  );
};
