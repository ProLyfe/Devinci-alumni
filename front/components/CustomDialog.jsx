import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { DialogContent, Grid } from '@mui/material';

const CustomDialog = (props) => {
  const { onClose, open, userData } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center'}}>
        <DialogTitle>{userData.firstname} {userData.lastname}</DialogTitle>
      </Grid>
      <DialogContent style={{ display: 'flex', justifyContent: 'center', marginTop: '-4%' }}>
        <Grid container>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }}>
                <img
                    style={{ width: '50%', height: '100%' }}
                    src={userData.image}
                    alt="image"
                />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h6'>{userData.work} ({userData.degree})</Typography>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography>{userData.description}</Typography>
            </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;