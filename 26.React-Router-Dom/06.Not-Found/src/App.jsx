//Créer page NotFound puis la route
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop.jsx'
import Success from './Pages/success.jsx'
import Navbar from './components/navbar/navbar.jsx'
import NotFound from './Pages/NotFound.jsx'
import './App.css'


function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/success' element={<Success />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    
    </>
  )
}

export default App
