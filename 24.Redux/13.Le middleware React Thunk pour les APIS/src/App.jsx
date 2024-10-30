// Les actions synchrones sont des objets JavaScript simples qui ont un type défini et éventuellement des données associées. Elles sont généralement utilisées pour décrire des événements qui se produisent de manière instantanée dans votre application. Lorsqu'une action synchrone est dispatchée, elle est immédiatement traitée par le réducteur, ce qui met à jour l'état global de manière synchrone. aller dans action


import { connect } from 'react-redux';
import Stock from './components/Stock';
import './App.css'
import Todo from './components/Todo'






//Créer stateNested
function App() {


  return (
    <>
      <Stock />
      <Todo />

  




   
    </>
  )
}

export default connect()(App);
