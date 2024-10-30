import {useNavigate} from 'react-router-dom'
export default function Home() {

  const nav = useNavigate()

  const handleClick = ()=> {
    nav('success')
  }

  return (
    <>
    
      <h1>Home</h1>
      <button onClick={handleClick}>Paiement</button>
    </>
  )
}
