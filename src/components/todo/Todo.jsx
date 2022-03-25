import React from "react";
import "./Todo.css";
import IconButton from "@material-ui/core/IconButton";
import BackspaceIcon from '@mui/icons-material/Backspace';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.taskCompleted ? "line-through" : "" }}
    >
      <div>
        <input
          type="checkbox"
          onClick={() => completeTodo(index)}
        />
      </div>
      {todo.task}
      <div>
        <IconButton onClick={() => removeTodo(index)}><BackspaceIcon /></IconButton>
      </div>
    </div>
  );
};

export default Todo;
