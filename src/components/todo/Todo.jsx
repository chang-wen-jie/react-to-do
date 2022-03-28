import React from "react";
import "./Todo.css";
import IconButton from "@material-ui/core/IconButton";
import BackspaceIcon from "@mui/icons-material/Backspace";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.taskCompleted ? "line-through" : "" }}
    >
      <div>
        <IconButton onClick={() => completeTodo(index)}>
          <AssignmentTurnedInIcon />
        </IconButton>
      </div>
      {todo.task}
      <div>
        <IconButton onClick={() => removeTodo(index)}>
          <BackspaceIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Todo;
