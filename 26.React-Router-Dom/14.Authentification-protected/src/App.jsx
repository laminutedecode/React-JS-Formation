// L'authentification et les routes protégées sont des aspects importants de nombreuses applications web modernes. L'authentification consiste à vérifier l'identité d'un utilisateur, tandis que les routes protégées sont des routes dans votre application qui nécessitent que l'utilisateur soit authentifié pour y accéder. Créer auth.jsx dans composant
import {lazy, Suspense } from 'react';
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
import Login from './Pages/login.jsx';
import './App.css'
import { AuthProvider } from './components/auth.jsx';
import Dashboard from './Pages/dashboard.jsx';
import AuthProtected  from './components/authProtected.jsx';


function App() {



    const LazyAbout = lazy(() => import('./Pages/about.jsx'))


  return (
    <AuthProvider>
      {/* //créer login */}
    <Navbar />
        <Suspense fallback={<Loading />}>
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


      <Route path='/login' element={<Login />}/>
      <Route path='/dashboard' element={<AuthProtected><Dashboard /></AuthProtected>}/>

      
    </Routes>
        </Suspense>



    <Outlet />
    </AuthProvider>
  )
}

export default App
