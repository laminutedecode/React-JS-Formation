import { useAuth } from '../components/auth'
import {Navigate, useLocation} from "react-router-dom"

// useLocation permet aux composants fonctionnels d'accéder aux informations sur l'URL courante, telles que le chemin, la recherche et l'état, sans avoir besoin de passer ces informations via les props.

export default function AuthProtected ({children}) {


  const location = useLocation()

  const auth = useAuth()

  if(!auth.user){
    return <Navigate to="/login" state={{path: location.pathname}} />
    //rajouter useLocation à login
  }


  return children
}
//entourer dashboard dans app avec ce composant pour proteger la page