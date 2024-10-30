import Counter from './components/counter';
import './App.css'
// Le hook useReducer en React est utilisé pour gérer des états complexes de manière plus organisée. Il est souvent préféré lorsque l'état dépend de l'état précédent ou lorsque l'état de votre composant est complexe et peut avoir plusieurs transitions.


function App() {


  return (
    <>
     <div>
      <h1>useReducer</h1>
      <Counter />
    </div>
    </>
  )
}

export default App
