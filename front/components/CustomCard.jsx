import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CustomDialog from '../components/CustomDialog'

export default function MultiActionAreaCard({ userData, setActiveStep, userSelected, setUserSelected, noBtn }) {
  console.log(noBtn)
    const MySwal = withReactContent(Swal)
    const isSelected = userSelected === userData.id

    const handleClick = () => {
        MySwal.fire({
            title: <strong>Vous avez choisi votre parrain !</strong>,
            html: <i>Un email lui a été envoyé !</i>,
            icon: 'success'
          }).then(() => {
            setUserSelected(userData.id)
            setActiveStep(3)
          })
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = (value) => {
      setOpen(false);
    };

  return (
    <React.Fragment>
      <Paper elevation={isSelected ? 15 : 0}>
        <Card>
          <CardActionArea onClick={handleClickOpen}>
            <CardMedia
              component="img"
              height="140"
              image={userData.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                {userData.firstname} {userData.lastname}
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                {userData.work}
              </Typography>
            </CardContent>
          </CardActionArea>
          {!noBtn ? <CardActions>
            {isSelected ? <Button
              size="small"
              color="primary"
              style={{margin: '0 auto', display: "flex", color: "green"}}
              disabled={true}
              >
                Sélectionné
              </Button> : <Button
              size="small"
              color="primary"
              style={{margin: '0 auto', display: "flex"}}
              onClick={handleClick}
              variant='contained'
              >
            Choisir
            </Button>}
          </CardActions> : '' }
        </Card>
      </Paper>
      <CustomDialog
        open={open}
        onClose={handleClose}
        userData={userData}
      />
    </React.Fragment>
  );
}