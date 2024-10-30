

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
        {/* <Route path='users/1' element={<Profil />}/>
        <Route path='users/2' element={<Profil />}/>
        <Route path='users/3' element={<Profil />}/> */}
        {/* <Route path='users/:userId' element={<Profil />}/> */}
        {/* <Route path='users/admin' element={<Admin />}/> */}


        {/* Nous pouvons les imbrique rajouter Oultet dans Users*/}

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



// Lorsque vous imbriquez des routes dans React Router DOM, vous les utilisez généralement pour structurer votre application en composants plutôt qu'en pages distinctes. Les routes imbriquées vous permettent de diviser votre application en composants réutilisables et modulaires, qui peuvent être rendus en fonction de l'URL actuelle.

// Chaque route peut être associée à un composant spécifique, et lorsqu'une URL correspond à cette route, le composant correspondant est rendu à l'écran. Les routes imbriquées vous permettent d'organiser vos composants de manière hiérarchique, avec des routes enfants rendues à l'intérieur des routes parentes.