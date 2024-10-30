// Le refetchOnMount dans React Query détermine si une requête doit être automatiquement refaite lorsque le composant est monté. Par défaut, cette option est à true, ce qui signifie que la requête sera automatiquement refaite dès que le composant est monté. Cependant, vous pouvez modifier ce comportement en utilisant refetchOnMount avec false pour empêcher cela.


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
    refetchOnMount: false, // Ne refait pas automatiquement la requête lors du montage. Avec refetchOnMount défini sur false, la requête ne sera pas automatiquement refaite lorsque le composant est monté. Cela signifie que vous devrez appeler manuellement la fonction refetch pour déclencher une nouvelle requête si nécessaire, par exemple en réponse à une action de l'utilisateur sur un bouton que lont retourne en jsx
    enabled: true,
    staleTime: 60000, // 1 minute
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
