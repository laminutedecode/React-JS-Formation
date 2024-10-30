// Les URL params (ou paramètres d'URL) sont des portions de l'URL qui permettent de passer des données d'une page à une autre dans une application web. Ils sont souvent utilisés pour permettre à l'utilisateur de spécifier des informations dans l'URL, telles que des identifiants, des filtres ou des options, qui seront utilisées pour afficher le contenu de la page.

// Dans React Router DOM, vous pouvez définir des paramètres d'URL dans vos routes en utilisant la syntaxe /:nomParamètre. Aller dans profil

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
