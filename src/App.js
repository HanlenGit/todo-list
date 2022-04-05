import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Tell all my friends how good I am",
    "Get them to tell their friends about how good I am",
    "Feel great when people tell me how good I am at React",
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <div className="todo-list">
    <h1> My To Do List</h1>
    {todos.map((todo, index) => (
    <TodoItem todo={todo} key={index} />
      ))}
    <TodoForm addTodo={addTodo} />
    </div>
    </div>
  );
}

export default App;
