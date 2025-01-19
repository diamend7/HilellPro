import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() === "") {
      return;
    } else {
      const newTodo = { id: Date.now(), task };
      setTodos([...todos, newTodo]);
      setTask("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h1>TODO List</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Введіть задачу"
          style={{
            padding: "10px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      </div>
      <button
        onClick={handleAddTodo}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Додати задачу
      </button>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: "0" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ccc",
              textAlign: "left",
            }}
          >
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
