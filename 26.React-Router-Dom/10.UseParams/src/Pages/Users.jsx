import {Outlet} from 'react-router-dom'

export default function Users() {
  return (
    
    <div>
      <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
    </ul>
    <Outlet />
    </div>
  )
}
