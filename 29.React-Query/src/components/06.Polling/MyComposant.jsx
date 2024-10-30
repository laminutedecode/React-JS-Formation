// Le polling, également connu sous le nom de sondage en français, est une technique utilisée en informatique pour obtenir périodiquement des mises à jour à partir d'une source de données, comme un serveur, une API ou une base de données.
// pour configurer le polling dans React Query, vous pouvez utiliser l'option refetchInterval dans useQuery. Cela permet de spécifier à quelle fréquence la requête doit être automatiquement rafraîchie pour obtenir les dernières données du serveur.


import { useQuery, QueryClient } from 'react-query';
import { useEffect } from 'react';
import axios from 'axios';

export default function MyComponent() {
  const queryClient = new QueryClient(); 

  const fetchRandomUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=5');
      return response.data.results; 
    } catch (error) {
      throw new Error('Erreur lors de la récupération des données');
    }
  };

  //ajouter refetch 
  const { data, isLoading, error, refetch  } = useQuery('randomUsers', fetchRandomUsers, {
    refetchInterval: 10000, // Rafraîchit les données toutes les 10 secondes
    enabled: true,
    staleTime: 60000,
    refetchOnMount: false,
    onSuccess: (data) => {
      console.log('Query succeeded!', data);
      queryClient.setQueryData('randomUsers', data);
    },
    onError: (error) => {
      console.error('Query failed!', error);
    },
  });

  useEffect(() => {
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
      {/* //ajouter button */}
      <button onClick={refetch}>Recharger les utilisateurs aléatoires</button>

    </div>
  );
}
