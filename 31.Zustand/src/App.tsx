
import './App.css'
import { useCombinedStore } from './store'; // Importe le store combiné





function App() {


  const { count, increment, decrement, name } = useCombinedStore();




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
