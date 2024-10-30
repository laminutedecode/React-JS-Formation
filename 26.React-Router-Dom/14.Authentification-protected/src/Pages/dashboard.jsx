import { useAuth } from "../components/auth"
import {useNavigate} from 'react-router-dom'
export default function Dashboard() {

  const auth = useAuth()

  const navigate = useNavigate()

  const handleClick = ()=> {
    auth.logout()
    navigate('/')
  }

  return (
    <>
      <div>Dashboard {auth.user}</div>
      <button onClick={handleClick}>logout</button>
    </>
  )
}
