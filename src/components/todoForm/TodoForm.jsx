import React from "react";
import "./TodoForm.css";
import IconButton from "@material-ui/core/IconButton";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

const dialogTitleStyle = {
  textAlign: "center",
  background: "#ffff88",
  fontSize: 40,
  fontWeight: "bold",
  fontFamily: "cursive",
  color: "green",
};

const addIconStyle = {
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

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle style={dialogTitleStyle}>Nieuwe taak</DialogTitle>
      <form
        className="task-dialog"
        onSubmit={(e) => {
          handleSubmit(value);
          preventDefault(e);
        }}
      >
        <input
          type="text"
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
    if (!value || value.trim() === "") return;
    addTodo(value);
  };

  return (
    <div className="new-task-button">
      <IconButton onClick={handleClickOpen}>
        <DriveFileRenameOutlineIcon style={addIconStyle} />
      </IconButton>
      <SimpleDialog open={open} onClose={handleClose} value={value} />
    </div>
  );
};

export default TodoForm;
