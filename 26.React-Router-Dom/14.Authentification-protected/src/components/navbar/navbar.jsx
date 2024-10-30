import {NavLink} from 'react-router-dom'
import { useAuth } from '../auth'
import './navbar.css'


export default function navbar() {


    const navLinksStyle = ({isActive}) => {
      return {
        fontWeight: isActive ? 'bold' : 'normal'
      }
    }


    const auth = useAuth()

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
        <li>
          <NavLink style={navLinksStyle} to="/login">login</NavLink>
        </li>
        {auth.user && (
          <NavLink style={navLinksStyle} to="/dashboard">Dashbaord</NavLink>
        ) }
      </ul>
    </nav>
  )
}
