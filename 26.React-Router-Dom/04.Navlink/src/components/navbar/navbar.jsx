import {NavLink} from 'react-router-dom'
import './navbar.css'

{/* <NavLink> est un composant fourni par React Router DOM qui fonctionne de manière similaire à <Link>, mais avec quelques fonctionnalités supplémentaires spécifiquement conçues pour la navigation.

Tout comme <Link>, <NavLink> est utilisé pour créer des liens de navigation dans une application React, mais il offre également des fonctionnalités supplémentaires telles que la possibilité d'appliquer des styles ou des classes CSS spécifiques lorsqu'un lien est actif ou correspond à l'URL actuelle. Il rajoute sous le capot la classe active au lien active (voir dans les devtools). Dans notre cc nous pouvons jaouter la classe active */}

export default function navbar() {


    //nous pouvons appliquer du css directement depuis notre composant

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
