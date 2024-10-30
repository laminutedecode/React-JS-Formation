//npm i redux-logger 
// redux-logger est un middleware Redux très utile pour le développement. Il permet de journaliser chaque action qui est envoyée dans le store Redux, ainsi que l'état avant et après chaque action. Cette journalisation facilite le débogage en fournissant une trace claire des actions qui se produisent dans l'application, ainsi que des changements d'état correspondants.


// Le middleware permet d'intercepter et de traiter les actions Redux avant qu'elles n'atteignent les reducers, ce qui permet d'effectuer des tâches supplémentaires telles que la gestion des effets secondaires, la journalisation, la gestion de la synchronisation asynchrone

// Interception des actions : Lorsqu'une action est envoyée depuis votre application, elle traverse le middleware avant d'atteindre les reducers.

// Traitement des actions : Le middleware peut inspecter l'action, exécuter un code en fonction de son type ou de son contenu, ou même ignorer complètement l'action.

// Poursuite de la chaîne d'action : Après avoir traité l'action, le middleware peut la relayer à la fonction dispatch() suivante dans la chaîne, ou bien décider de ne pas la relayer.

// Passage à l'étape suqivante : Si le middleware relaie l'action, elle finira par atteindre les reducers, où elle sera utilisée pour mettre à jour l'état global de l'application. aller dans store




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
