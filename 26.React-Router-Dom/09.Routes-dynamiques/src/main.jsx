import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
// Le BrowserRouter est un composant essentiel pour la mise en place de la navigation dans une application React. Le BrowserRouter enveloppe l'ensemble de votre application et gère la synchronisation de l'URL affichée dans la barre d'adresse du navigateur avec les composants React que vous souhaitez afficher.

// En d'autres termes, le BrowserRouter écoute les changements d'URL dans le navigateur et met à jour votre application en conséquence, en affichant les composants React correspondants. Il permet à React Router DOM de fonctionner correctement en interceptant les changements d'URL et en assurant que l'interface utilisateur de votre application web réagit de manière appropriée. Il va donc vous permettre d'utiliser des fonctionnalités telles que les routes, les liens et les redirections.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
