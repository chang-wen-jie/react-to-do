import React, { useState } from "react";
import Todo from "./components/todo/Todo";
import TodoForm from "./components/todoForm/TodoForm";
import Heading from "./components/heading/Heading";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      task: "Boodschappen",
      taskCompleted: false,
    },
    {
      task: "Koken",
      taskCompleted: false,
    },
    {
      task: "Sporten",
      taskCompleted: false,
    },
  ]);

  console.log("wat is mijn todo const", todos);

  const addTodo = (task) => {
    const newTodos = [...todos, { task }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].taskCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    console.log("Wat is mijn index", index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
        <Heading beginNaam = { 0 } />
      </div>
    </div>
  );
}

export default App;
