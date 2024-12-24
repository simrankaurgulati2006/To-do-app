// TodoItem1.jsx
function TodoItem1() {
  let todoName = 'Buy Milk';
  let todoDate = '20/2/2024';

  return (
    <div className="container text-center">
      <div className="row sk-row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sk-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
