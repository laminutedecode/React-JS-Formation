// Le hook useContext en React est utilisé pour accéder au contexte (context) dans un composant fonctionnel. Le contexte est une fonctionnalité qui permet de transmettre des données à travers l'arbre des composants sans avoir besoin de passer explicitement des propriétés de composant en composant.

import ThemeProvider from './context/ThemeProvider';
import Counter from './components/Counter';
import './App.css'

function App() {


  return (
    <>
       <ThemeProvider>
      <div>
        <h1>useContext</h1>
        <Counter />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
