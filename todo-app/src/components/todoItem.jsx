import React, { useState, Fragment } from 'react';
import Card from '@mui/material/Card';
import SimpleDialogBox from './dialog';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';


function TodoItem({ todo }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    // SimpleDialogBox(todo,handleClose,open)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <div className="relative flex flex-col border-4 border-gray-300 p-2 rounded-lg">
        <Card
          key={todo.id}
          variant="elevation"
          className="text-xl p-4 m-2 flex-grow bg-white shadow-md rounded-lg"
        >
          {todo.todo}
        </Card>
        <button
          className="overflow-hidden border-2 w-[60px] h-[40px] rounded-full hover:scale-110 hover:shadow-md transition-transform duration-150 bg-gray-200 text-black"

            onClick={handleClickOpen}
        >
          View
        </button>
      </div>

      <SimpleDialogBox todo={todo} open={open} handleClose={handleClose} />
      
    </Fragment>
  );
}

export default TodoItem;
