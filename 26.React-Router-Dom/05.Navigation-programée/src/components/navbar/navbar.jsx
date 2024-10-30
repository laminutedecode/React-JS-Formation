import {NavLink} from 'react-router-dom'
import './navbar.css'

// La navigation programmée fait référence à la navigation qui est déclenchée par du code JavaScript plutôt que par des interactions directes de l'utilisateur, telles que le clic sur un lien. Avec React Router DOM, vous pouvez naviguer programmation en utilisant l'objet history fourni par React Router. Par exemple imaginons une page d epaiement avec une page en cas de succes une page en cas d'erreur.Créer la page success

export default function navbar() {


    const navLinksStyle = ({isActive}) => {
      return {
        fontWeight: isActive ? 'bold' : 'normal'
      }
    }

  return (
    <nav>
      <ul>
        <li>
          <NavLink style={navLinksStyle}  to="/">Home</NavLink>
        </li>
        <li>
          <NavLink style={navLinksStyle} to="/shop">Shop</NavLink>
        </li>
      </ul>
    </nav>
  )
}
