import {Link} from 'react-router-dom'
import './navbar.css'

{/* <Link> est un composant fourni par React Router DOM qui permet de créer des liens de navigation dans votre application React. Contrairement à l'élément HTML <a>, qui recharge généralement la page entière lorsqu'il est cliqué, <Link> utilise le routage de React Router DOM pour mettre à jour l'URL affichée dans le navigateur et afficher le composant correspondant sans rechargement de page. */}

export default function navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  )
}
