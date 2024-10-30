
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static">
      {/* static / fixed / absolute / relative */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mon Application
        </Typography>
        <Button color="inherit">Accueil</Button>
        <Button color="inherit">À Propos</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}



// AppBar est utilisé pour créer la barre de navigation. À l'intérieur de AppBar, nous utilisons Toolbar pour organiser les éléments de la barre de navigation. Typography est utilisé pour afficher le titre de l'application, et Button est utilisé pour créer des boutons de navigation. Les boutons ont la propriété color="inherit" pour qu'ils prennent la couleur de texte par défaut de la barre de navigation.