import {useNavigate} from 'react-router-dom'
// useNavigate est une fonction permettant de naviguer entre les différentes pages de l'application.
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
