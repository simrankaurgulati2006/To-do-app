// AddTodo.jsx
function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row sk-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success sk-button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
