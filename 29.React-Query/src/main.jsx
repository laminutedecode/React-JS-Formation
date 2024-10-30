import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';


// QueryClient : C'est une classe fournie par React Query qui gère la configuration et le cache des requêtes de données. Il stocke les données mises en cache et fournit des méthodes pour interagir avec le cache, telles que l'invalidation des données mises en cache ou le nettoyage du cache.

// QueryClientProvider : C'est un composant de contexte fourni par React Query. Il enveloppe l'application et fournit le QueryClient à tous les composants enfants utilisant useQuery, useMutation, etc. Cela permet aux composants d'accéder au même QueryClient et de partager le cache des données entre eux.


const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
