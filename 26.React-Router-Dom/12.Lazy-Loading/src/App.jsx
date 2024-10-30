// Le "lazy loading" est une technique de chargement des ressources dans une application web de manière différée, c'est-à-dire qu'elles ne sont chargées que lorsque nécessaire. Cela permet d'améliorer les performances globales de l'application en réduisant le temps de chargement initial et en ne chargeant que les ressources nécessaires à un moment donné.

// le "lazy loading" est souvent utilisé pour charger de manière dynamique des composants de manière asynchrone, notamment lors de la définition des routes de navigation. Créer about page


//1
import {lazy, Suspense } from 'react';
// Suspense est un composant fourni par React qui permet de gérer le chargement asynchrone des composants et d'afficher un indicateur de chargement (fallback) pendant que le composant est en cours de chargement.
import Loading from './components/Loading.jsx';


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


    //2

    const LazyAbout = lazy(() => import('./Pages/about.jsx'))


  return (
    <>
    <Navbar />
        <Suspense fallback={<div>Loading</div>}>
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

          <Route path='/about' element={<LazyAbout />}/>  
        {/* fallback spécifie le contenu à afficher pendant le chargement du composant. */}
    </Routes>
        </Suspense>



    <Outlet />
    </>
  )
}

export default App
