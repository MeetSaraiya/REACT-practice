import React, {  Fragment } from 'react';
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';


const SimpleDialogBox = ({todo, handleClose,open}) => {

    
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Title : {todo.todo}
        </DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
          ID : {todo.id}
          </DialogContentText> 
          <DialogContentText id="alert-dialog-description">
          Status : {todo.completed ? 'this todo is completed' : 'this todo is pending'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
  )
}

export default SimpleDialogBox