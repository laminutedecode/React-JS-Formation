import {useState} from 'react'
import './App.css'
import MyComposant from './MyComposant'


function App() {

  const [state, setState] = useState('Props depuis le parent')
  const [childState, setChildState] = useState(null)

  const handleChange = (newState) => {
    setChildState(newState);
  };



  return (
    <>
      <MyComposant onStateChange={handleChange} propsParent={state} />
      <p>État du composant enfant : {childState}</p>
  
    </>
  )
}

export default App
