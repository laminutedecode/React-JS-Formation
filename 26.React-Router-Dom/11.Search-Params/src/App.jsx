// Les URLSearchParams, souvent appelés "search params", sont un objet JavaScript natif qui permet de manipuler facilement les paramètres de recherche d'une URL. Ces paramètres sont généralement situés après le point d'interrogation (?) dans une URL et sont utilisés pour transmettre des données entre les différentes pages d'une application web. aller dans users

import {Routes, Route, Outlet} from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop.jsx'
import Success from './Pages/success.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Product from './Pages/Product.jsx'
import NotFound from './Pages/NotFound.jsx'
import New from './Pages/New.jsx'
import All from './Pages/All.jsx'
import Users from './Pages/Users.jsx'
import Profil from './Pages/Profil.jsx'
import Admin from './Pages/admin.jsx'
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
        <Route path='all' element={<All />}/>
        <Route path='new' element={<New />}/>
      </Route>

        <Route path='users' element={<Users />}/>

        <Route path='users' element={<Users />}> 
        <Route path=':userId' element={<Profil />}/>
        <Route path='admin' element={<Admin />}/>
        </Route>

    </Routes>
    <Outlet />
    </>
  )
}

export default App
