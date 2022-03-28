import React, { useState } from "react";
import Todo from "./components/todo/Todo";
import TodoForm from "./components/todoForm/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      task: "Boodschappen",
      taskCompleted: false,
    },
    {
      task: "Sporten",
      taskCompleted: false,
    },
    {
      task: "Stretchen",
      taskCompleted: false,
    },
  ]);

  const addTodo = (task) => {
    const newTodos = [...todos, { task }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].taskCompleted = !newTodos[index].taskCompleted;
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
        <div className="sticky-header">
          <img
            src="https://www.freeiconspng.com/uploads/pushpin-png-4.png"
            width="50"
            alt="Red Pushpin"
          />
          <div className="sticky-title">
            <h1>Mijn taken</h1>
          </div>
        </div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        {todos.length === 0 && (
          <div className="empty-todo-list">
            <h2>
              <i>Yay, geen taken meer!</i>
            </h2>
          </div>
        )}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
