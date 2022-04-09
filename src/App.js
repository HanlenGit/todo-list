import "./App.css";
import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
    text: "Learn about React",
    isCompleted: false,
    },
    {
    text: "Meet friend for lunch",
    isCompleted: false,
    },
    {
    text: "Build really cool todo app",
    isCompleted: false,
    },
  ]);
// ...todo is looping through the existing list [array] and adding to the []
    const addTodo = (text) => {
      const newTodos = [...todos, { text, isCompleted: false }];
      setTodos(newTodos);
    };

    const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    };

    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

  return (
    <div className="app">
      <div className="todo-list">
        <h1> My To Do List</h1>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} index={index} 
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
