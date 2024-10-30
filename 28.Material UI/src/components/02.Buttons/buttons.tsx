// Le "Stack" est un composant dans Material-UI qui est utilisé pour créer des mises en page verticales ou horizontales. Il est particulièrement utile pour empiler des éléments les uns au-dessus des autres ou côte à côte, avec un espacement et un alignement appropriés entre eux.
import {Button, Stack, IconButton} from "@mui/material"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export default function Buttons(){
  return (
    <>  
        {/* spacing = espace , direction = row | row-reverse */}
        <Stack spacing={4} direction='row'>
          {/* bouton text */}
          <Button variant="text">Text</Button>
          {/* bouton plein */}
          <Button variant="contained">Contained</Button>
          {/* bouton border */}
          <Button variant="outlined">Outlined</Button>
     
          {/* Créer lien à partir d'un bouton */}
          <Button variant="outlined" href="https://laminutedecode.com">Link</Button>
        </Stack>

        <br />

        <Stack spacing={2} direction="row">
          {/* couleurs */}
          {/* https://mui.com/material-ui/customization/palette/ */}
          <Button variant="contained" color="error" >Error</Button>
          <Button variant="contained" color="primary" >Primary </Button>
          <Button variant="contained" color="secondary" >Secondary </Button>
          <Button variant="contained" color="warning" >Warning </Button>
          <Button variant="contained" color="info" >Info </Button>
          <Button variant="contained" color="success" >Success </Button>
        </Stack>

        <br />

        {/* taille de bouton */}
        <Stack display='block' direction='row' spacing={2}>
          <Button variant="contained" size="small" >Small</Button>
          <Button variant="contained" size="medium" >Medium</Button>
          <Button variant="contained" size="large" >Large</Button>
        </Stack>
        <br />

        {/* Avec des icones - npm install @mui/icons-material - https://mui.com/material-ui/material-icons/ */}
        <Stack direction='row' spacing={2}>
          <Button variant="contained" startIcon={<ArrowCircleRightIcon />}>Envoyer</Button>
          <Button variant="contained" endIcon={<ArrowCircleRightIcon />}>Envoyer</Button>

          {/* icons button */}
          <IconButton color="warning" size="small">
            <ArrowCircleRightIcon />
          </IconButton>


          <Button variant="contained" disableElevation>Envoyer</Button>
          {/* disableElevation est un attribut utilisé dans certains composants, tels que les boutons, pour désactiver l'effet d'élévation. L'effet d'élévation est l'ombre qui est généralement affichée derrière un élément pour lui donner un aspect tridimensionnel, semblable à un bouton en relief. */}
          <Button variant="contained" disableRipple>Envoyer</Button>
          {/* disableRipple désactive leffet ripple au click */}

        </Stack>
    </>
  )
}