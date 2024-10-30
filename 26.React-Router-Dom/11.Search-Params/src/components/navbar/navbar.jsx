import {NavLink} from 'react-router-dom'
import './navbar.css'


export default function navbar() {


    const navLinksStyle = ({isActive}) => {
      return {
        fontWeight: isActive ? 'bold' : 'normal'
      }
    }

  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink style={navLinksStyle}  to="/">Home</NavLink>
        </li>
        <li>
          <NavLink style={navLinksStyle} to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink style={navLinksStyle} to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  )
}
