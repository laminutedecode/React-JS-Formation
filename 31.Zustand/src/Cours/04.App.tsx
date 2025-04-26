
import useCountStore from './05.Immer';
import './App.css';




function App() {

  const { count, increase } = useCountStore();



  return (
    <>
  
      <h2>Count: {count}</h2>
      <button onClick={() => increase(1)}>+</button>
 
    </>
  )
}

export default App
