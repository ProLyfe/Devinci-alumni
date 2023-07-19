import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function MultiActionAreaCard({ userData, setActiveStep, userSelected, setUserSelected }) {
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

  return (
    <Paper elevation={isSelected ? 15 : 0}>
      <Card>
        <CardActionArea>
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
        <CardActions>
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
            variant='outlined'
            >
          Choisir
          </Button>}
        </CardActions>
      </Card>
    </Paper>
  );
}