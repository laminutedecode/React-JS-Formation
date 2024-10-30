
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop.jsx'
import './App.css'


function App() {

  // Une route est une instruction qui lie une URL spécifique à un composant particulier de votre application. Lorsque l'URL correspond à la route spécifiée, le composant associé est rendu à l'écran. 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<Shop />}/>
    </Routes>
    
    </>
  )
}

export default App
