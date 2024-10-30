// Les routes imbriquées (ou routes enfants) sont des routes définies à l'intérieur d'autres routes dans React Router DOM. Cela signifie que la correspondance d'une route enfant dépend de l'URL de sa route parente. Créer la page product


import {Routes, Route, Outlet} from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop.jsx'
import Success from './Pages/success.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Product from './Pages/Product.jsx'
import NotFound from './Pages/NotFound.jsx'
import New from './Pages/New.jsx'
import All from './Pages/All.jsx'
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
      <Route path='product' element={<Product />}>
        <Route path='all' element={<All />}/>
        <Route path='new' element={<New />}/>
      </Route>
    </Routes>
    <Outlet />
    {/* <Outlet> est un composant  utilisé dans le contexte de routage imbriqué, souvent en conjonction avec <Routes>, pour rendre les composants correspondant aux routes imbriquées. */}
    </>
  )
}

export default App
