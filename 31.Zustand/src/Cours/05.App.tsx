
import { useCountStore } from './05.Immer';
import './App.css';




function App() {

  const { count, increment, decrement } = useCountStore();



  return (
    <>
  
  <h2>Count: {count}</h2>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button>
 
    </>
  )
}

export default App
