import { connect } from 'react-redux';
import Stock from './components/Stock';
import './App.css'

//Créer root reducer et changer store
function App() {


  return (
    <>
      <Stock />
   
    </>
  )
}

export default connect()(App);
