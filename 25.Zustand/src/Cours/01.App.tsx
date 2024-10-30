
import './App.css'
import {useStore} from "./04.DevtoolsPersist"



function App() {

const name = useStore().name
const count = useStore().count
const increment = useStore().increment
const decrement = useStore().decrement



  return (
    <>
      <p>{name}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
    </>
  )
}

export default App
