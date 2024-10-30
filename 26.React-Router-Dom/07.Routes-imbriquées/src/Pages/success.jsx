
import {useNavigate} from 'react-router-dom'

export default function Success() {

  
  const nav = useNavigate()

  
  const handleClick = ()=> {
    nav('/shop', {replace: true})
  }


  return (
    <>
      <h1>Success</h1>
      <button onClick={handleClick}>Back</button>
    </>
  )
}


