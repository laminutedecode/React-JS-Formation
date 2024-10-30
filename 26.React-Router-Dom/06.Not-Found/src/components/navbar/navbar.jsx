import {NavLink} from 'react-router-dom'
import './navbar.css'


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
