import React from "react";
import "./TodoForm.css";
import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from '@mui/icons-material/AddBox';

const styles = {

  largeIcon: {
    width: 600,
    height: 600,
  },

};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton iconStyle={styles.largeIcon}><AddBoxIcon /></IconButton>
    </form>
  );
};

export default TodoForm;
