// useState est une fonction dans React qui permet à un composant de gérer son propre état interne. Cela signifie qu'un composant peut stocker des données qui changent au fil du temps et les utiliser pour rendre dynamiquement l'interface utilisateur.
import './App.css'
import {useState} from 'react'
import MyComposant from './MyComposant';


function App() {

  const [state, setState] = useState(0);
  const [input, setInput] = useState('');
  const [item, setItem] = useState({
    name: 'Jonathan',
    age: 31
  })
  const [inputForm, setInputForm] = useState('');
  const [checked, setChecked] = useState(false);
  const toggle = ()=> {
    setChecked(!checked)
  }
  
  function handleChange(e) {
    const value = e.target.value;
    console.log(value);
    setInput(value)
  }

  function incr(){
    setState(state + 1)
  }
  function dec(){
    setState(state - 1)
  }
  
  function handleCheck(){
    setItem({...item, age: item.age +1})
  }

function handleSubmit(e){
  e.preventDefault();
  console.log(new FormData(e.target))
 
}

  return (
    <>

    {state}
    <br /><br />
    <button onClick={incr}>+</button>
    <button onClick={dec}>-</button>
     <MyComposant state={state} />

     <input 
      type="text"
      value={input}
      onInput={handleChange} />

      <br /><br />

      {item.name}
      {item.age}

      <button onClick={handleCheck}>Ajouter 1 an</button>


      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue="Valeur par default" />
        <input type="checkbox" checked={checked} onChange={toggle}/>
        {/* {checked && <button>Envoyer</button>} */}
        <button disabled={!checked}>Envoyer</button>
      </form>
    </>
  )
}

export default App
