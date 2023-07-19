import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function MultiActionAreaCard({ userData}) {
    const MySwal = withReactContent(Swal)

    const handleClick = () => {
        MySwal.fire({
            title: <strong>Parfait !</strong>,
            html: <i>Vous avez choisi votre alumni !</i>,
            icon: 'success'
          })
    }

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={userData.image}
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
            {userData.firstname} {userData.lastname}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={'center'}>
            {userData.work}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" style={{margin: '0 auto', display: "flex"}} onClick={handleClick}>
        Choisir
        </Button>
      </CardActions>
    </Card>
  );
}