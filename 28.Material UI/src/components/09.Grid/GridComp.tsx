import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function GridComp() {
  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
      {/* <Paper> est un composant de Material-UI qui est utilisé pour ajouter une surface cartonnée et des ombres à des éléments dans votre interface utilisateur. Cela crée une séparation visuelle entre différents éléments et donne une sensation de profondeur à votre conception. <Paper> est souvent utilisé pour contenir du contenu tel que des cartes, des panneaux, des boîtes de dialogue, etc. */}
        <Paper elevation={3} >
        {/* elevation: Cette prop définit la profondeur de l'ombre autour du papier. Plus le nombre est élevé, plus l'ombre est prononcée. Vous pouvez spécifier des valeurs de 0 à 24 pour cette prop.
        square: Si cette prop est définie sur true, le papier aura des coins carrés au lieu de coins arrondis.
        variant: Vous pouvez utiliser cette prop pour définir le style du papier. Les valeurs possibles sont "elevation" (par défaut) et "outlined", qui rend le papier avec une bordure mais sans ombre. */}
          <Typography variant="h5" component="h2">
            Titre
          </Typography>
          <Typography>
            Contenu .
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={6} xl={1} >
      {/* xs : Extra small devices (phones) - < 600px
      sm : Small devices (tablets) - ≥ 600px
      md : Medium devices (desktops) - ≥ 960px
      lg : Large devices (desktops) - ≥ 1280px
      xl : Extra large devices (large desktops) - ≥ 1920px */}
        <Paper sx={{ backgroundColor: 'lightblue', padding: 2 }}>
          <Typography>
            Élément 1
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper>
          <Typography>
            Élément 2
          </Typography>
        </Paper>
      </Grid>

    </Grid>
  )
}
