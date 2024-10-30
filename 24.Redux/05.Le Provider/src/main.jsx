import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.jsx'
import {Provider} from 'react-redux'

// Le <Provider> est un composant fourni par React Redux qui permet de connecter votre application React à un store Redux. Il est généralement utilisé au plus haut niveau de votre hiérarchie de composants afin que tous les composants de votre application puissent accéder au store via le contexte de React.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
// Vous enveloppez votre composant racine avec le <Provider> . Le <Provider> prend une propriété appelée store, qui est le store Redux que vous avez créé.

// Une fois que le store est passé au <Provider>, React Redux utilise le contexte de React pour fournir le store à tous les composants de l'application. Cela signifie que vous n'avez pas besoin de passer explicitement le store en tant que prop à chaque composant qui en a besoin.

// Dans n'importe quel composant enfant de l'application, vous pouvez accéder au store en utilisant des hooks de React Redux tels que useDispatch et useSelector (pour les composants fonctionnels) ou en utilisant connect (pour les composants de classe). utiliser connect dans app