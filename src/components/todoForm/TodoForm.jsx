import React from "react";
import "./TodoForm.css";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from '@mui/icons-material/Create';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const iconStyle = {
  fontSize: 60,
  color: "#964B00",
};

function SimpleDialog(props) {
  const { onClose, open } = props;

  const [value, setValue] = React.useState("");

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (value) => {
    onClose(value);
    setValue("");
  };

  const preventDefault = e => {
    e.preventDefault();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Nieuwe taak</DialogTitle>
      <form onSubmit={(e) => {handleSubmit(value); preventDefault(e)}}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </Dialog>
  );
}

const TodoForm = ({ addTodo }) => {
  const value = React.useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    if (value.trim() === "") return;
    addTodo(value);
  };

  return (
    <div style={{textAlign: "center", fontSize: 60, color: "#964B00"}}>
        <IconButton onClick={handleClickOpen}>
          <CreateIcon style={iconStyle} />
        </IconButton>
        <SimpleDialog
          open={open}
          onClose={handleClose}
          value={value}
        />
    </div>
  );
};

export default TodoForm;
