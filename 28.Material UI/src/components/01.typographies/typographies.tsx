// https://mui.com/material-ui/customization/default-theme/
import {Typography} from "@mui/material"

export default function Typographies(){
  return (
    <>
    <Typography variant="h1">H1 - Title</Typography>
    <Typography variant="h2">H2 - Title</Typography>
    <Typography variant="h3">H3 - Title</Typography>
    <Typography variant="h4">H4 - Title</Typography>
    <Typography variant="h5">H5 - Title</Typography>
    <Typography variant="h6">H6 - Title</Typography>
    <Typography variant="body1">Texte body 1</Typography>
    <Typography variant="body2">Texte body 2</Typography>
    <Typography variant="caption">Caption</Typography>
    <Typography variant="button">Texte button</Typography>
    <Typography variant="overline">Texte overline</Typography>

    <Typography variant="subtitle1">Subtitle 1</Typography>
    <Typography variant="subtitle2" component="p" gutterBottom>Subtitle 2</Typography>
    {/*Components Cet attribut spécifie le composant de base à utiliser pour le rendu de l'élément. */}
    {/* GutterBottom : Cet attribut ajoute un espacement en bas du composant.  Il est utile lorsque vous souhaitez ajouter un espace entre les éléments de texte, par exemple entre les paragraphes ou les en-têtes. */}

    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi.</Typography>
    <Typography fontSize={30} letterSpacing={1.5} fontWeight={700}  variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, adipisci!</Typography>
    
    </>
  )
}