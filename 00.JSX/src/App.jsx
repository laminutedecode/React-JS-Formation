/*
composant
react fragmente, 
id et className,
attribut en camelCase
balise fermente autofermente
interpolation des variables
css et module (propriete en camlKase)
evenement onClick, onChange
condition et ternaire
utiliser des fonction comme map et filter


*/

import './App.css'
import fstyle from './header.module.css'
const bool = true;

function App() {

  const prenom = 'Jonathan'

  const style = {color: "violet"}

  const tab = [
    'HTML',
    'CSS',
    'PHP',
    'SQL',
  ]


  function handleClick(){
    console.log('hello');
  }

  return (
    <>

  <h2>{prenom}</h2>
   { (bool && <h2>hello</h2>)}
  <h2 className='hello'>CSS depuis feuille de style</h2>
  <h2 style={{color: 'red', backgroundColor: '#333'}}>CSS en INLINE</h2>
  <h2 style={style}>CSS avec objet</h2>
  <h2 style={{color: bool ? "orange" : "green"}}>CSS avec ternaire</h2>
  <div className={fstyle.header}><h3>CSS avec Module</h3> </div>
  <button onClick={handleClick}>Cliquer ici</button>

  <ul>
    {tab.map(el => <li key={el}>{el}</li>)}
    {/* mettre une key important */}
  </ul>
     
    </>
  )
}

export default App
