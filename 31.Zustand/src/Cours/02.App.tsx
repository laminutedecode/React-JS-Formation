
import './App.css'
import {useStore} from "./03.UseCombine"
import { useStoreSelecteurs } from './03.UseCombine'



function App() {




const count = useStoreSelecteurs.use.count()
const increment = useStoreSelecteurs.use.increment()
const decrement = useStoreSelecteurs.use.increment()




  return (
    <>
    
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>{count}</p>
    </>
  )
}

export default App
