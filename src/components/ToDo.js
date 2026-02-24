import { useState } from "react";
import "../styles.css";
const ToDo = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    if (!inputTodo.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: inputTodo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputTodo("");
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todo_container">
      <h2 className="todo-heading">Todo List</h2>
      <input
        type="text"
        placeholder="Enter Todo"
        className="todo-input"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button className="todo-add" onClick={handleAdd}>
        Add
      </button>
      <div>
        <ul className="list">
          {todos.map((todo) => (
            <>
              <li className="li" key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button
                  className="delete"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ToDo;
