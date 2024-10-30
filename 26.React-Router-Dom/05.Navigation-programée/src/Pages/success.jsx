
import {useNavigate} from 'react-router-dom'

export default function Success() {

  
  const nav = useNavigate()

  
  const handleClick = ()=> {
    // nav('/')
    // nav(-1)
    nav('/shop', {replace: true})
  }

  // replace: Remplace l'entrée actuelle dans l'historique de navigation par une nouvelle entrée et navigue vers le chemin spécifié.
  // goBack() : Revenez à la page précédente dans l'historique de navigation.
  // goForward() : Avancez à la page suivante dans l'historique de navigation.
  // push(path, [state]) : Ajoute une nouvelle entrée dans l'historique de navigation et navigue vers le chemin spécifié.

  return (
    <>
      <h1>Success</h1>
      <button onClick={handleClick}>Back</button>
    </>
  )
}

// aller sur la page home
