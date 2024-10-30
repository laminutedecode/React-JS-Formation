import {Link} from 'react-router-dom'

export default function Product() {
  return (
    <>
    <input type="search" placeholder="search"/>

    <nav className='nav-prod'>
      <ul>
        <li>
          <Link to='all'>All</Link>
          <Link to='new'>New</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}
