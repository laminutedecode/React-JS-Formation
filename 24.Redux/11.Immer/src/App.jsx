import { connect } from 'react-redux';
import Stock from './components/Stock';
import './App.css'
import Todo from './Todo'



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
