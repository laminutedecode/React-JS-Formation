import { connect } from 'react-redux';
import Stock from './components/Stock';
import './App.css'


// bindActionCreators est une fonction fournie par Redux qui permet de lier automatiquement des action creators à la fonction dispatch du store Redux. Cela permet de simplifier le processus d'émission d'actions dans les composants, en évitant d'avoir à appeler manuellement dispatch à chaque fois. dans stock

function App() {


  return (
    <>
      <Stock />
    </>
  )
}

export default connect()(App);
