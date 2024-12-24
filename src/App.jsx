// App.jsx
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItem1 from './components/Todoitem1';  // Corrected component name
import TodoItem2 from './components/Todoitem2';  // Corrected component name
import './App.css';

function App() {
  return (
    <div className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 /> {/* Corrected component name */}
      </div>
    </div>
  );
}

export default App;
