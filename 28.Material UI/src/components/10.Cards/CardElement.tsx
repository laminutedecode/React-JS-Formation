import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const CardElement = () => {
  return (
    <Card style={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="250"
        image="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Nom de l'image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Titre de l'image
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description de l'image
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Action 1</Button>
        <Button size="small">Action 2</Button>
      </CardActions>
    </Card>
  );
};

export default CardElement;
