

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
        <Route index  element={<All />} />
      {/* <Route index /> est une manière spécifique de définir une route d'index dans React Router DOM. Cette syntaxe est utilisée pour définir une route qui correspond à l'URL racine de votre application. */}

      {/* Lorsque vous définissez une route avec <Route index />, cela signifie que cette route sera activée lorsque l'URL actuelle correspond à la racine de votre application, c'est-à-dire "/". Cela est souvent utilisé pour rendre un composant spécifique lorsque l'utilisateur arrive sur la page d'accueil de votre application. */}
        <Route path='all' element={<All />}/>
        <Route path='new' element={<New />}/>
      </Route>
    </Routes>
    <Outlet />
    </>
  )
}

export default App
