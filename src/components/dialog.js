import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

export default function FormDialog({open,handleClose,data,onChange,handleFormSubmit}) {
 const {id,name,email,phone,address,status}=data

  return (
    <div className='dailog'>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id?"Update user":"Create new user"}</DialogTitle>
        <DialogContent>
         <form>
             <TextField id="name" value={name} onChange={e=>onChange(e)} placeholder="Enter name" label="Name" variant="outlined" margin="dense" fullWidth />
             <TextField id="email" value={email} onChange={e=>onChange(e)} placeholder="Enter email" label="Email" variant="outlined" margin="dense" fullWidth />
             <TextField id="phone" value={phone} onChange={e=>onChange(e)} placeholder="Enter phone number" label="Phone Number" variant="outlined" margin="dense" fullWidth />
             <TextField id="address" value={address} onChange={e=>onChange(e)} placeholder="Enter address" label="address" variant="outlined" margin="dense" fullWidth />
             <TextField id="status" value={status} onChange={e=>onChange(e)} placeholder="Enter status" label="status" variant="outlined" margin="dense" fullWidth />
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
            {id?"Update":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}