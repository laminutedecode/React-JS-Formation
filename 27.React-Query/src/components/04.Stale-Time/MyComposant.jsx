// Dans le contexte de React, un "stale state" se produit lorsque vous effectuez une mise à jour d'état asynchrone et que la valeur de l'état utilisée dans cette mise à jour n'est pas la plus récente. Cela peut se produire notamment avec des mises à jour d'état basées sur des effets secondaires ou des requêtes asynchrones.


import { useQuery, QueryClient } from 'react-query';
import { useEffect } from 'react';
import axios from 'axios';

export default function MyComponent() {
  const queryClient = new QueryClient(); // Initialisez QueryClient

  const fetchRandomUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=5');
      return response.data.results; // Retourne uniquement la partie "results" de la réponse
    } catch (error) {
      throw new Error('Erreur lors de la récupération des données');
    }
  };

  // Par défaut, React Query utilise un temps de péremption de 0 millisecondes, ce qui signifie qu'il considère les données comme étant toujours obsolètes et qu'il effectue une nouvelle requête chaque fois que le composant est monté ou rafraîchi. Cependant, vous pouvez spécifier un temps de péremption personnalisé pour contrôler la fréquence à laquelle les données sont actualisées depuis le serveur.

  const { data, isLoading, error } = useQuery('randomUsers', fetchRandomUsers, {
    enabled: true,
    staleTime: 60000, // 1 minute
    // Dans cet exemple, staleTime est défini sur 60000 millisecondes (1 minute). Cela signifie que les données resteront valides pendant 1 minute avant d'être considérées comme obsolètes, ce qui entraînera une nouvelle requête pour les actualiser. Vous pouvez ajuster cette valeur en fonction de vos besoins spécifiques.

    // En utilisant le stale time, vous pouvez contrôler avec précision la fréquence à laquelle les données sont actualisées depuis le serveur, ce qui peut aider à réduire la charge sur le serveur et à améliorer les performances de votre application.
    refetchOnMount: false,
    onSuccess: (data) => {
      console.log('Query succeeded!', data);
      queryClient.setQueryData('randomUsers', data); // Mettre en cache les données récupérées
    },
    onError: (error) => {
      console.error('Query failed!', error);
    },
  });

  useEffect(() => {
    // Tentative de récupérer les données en cache
    const cachedData = queryClient.getQueryData('randomUsers');
    if (cachedData) {
      console.log('Données récupérées depuis le cache:', cachedData);
    }
  }, [queryClient]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error.message}</div>;
  }

  return (
    <div>
      <h2>Liste d'utilisateurs aléatoires :</h2>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            <img src={user.picture.thumbnail} alt="Avatar" />
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
}
