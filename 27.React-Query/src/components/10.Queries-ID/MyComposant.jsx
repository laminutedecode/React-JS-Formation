import { useQuery, QueryClient } from 'react-query';
import { useEffect } from 'react';
import axios from 'axios';

export default function MyComponent() {
  const queryClient = new QueryClient(); 

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log('Données brutes:', response.data);
      const userWithId2 = response.data.find(user => user.id === 2);
      return userWithId2 ? [userWithId2] : [];
    } catch (error) {
      throw new Error('Erreur lors de la récupération des données');
    }
  };

  const { data, isLoading, error } = useQuery('user', fetchUsers, {
    enabled: true,
    refetchOnMount: false,
    onSuccess: (data) => {
      console.log('Query succeeded!', data);
      queryClient.setQueryData('user', data);
    },
    onError: (error) => {
      console.error('Query failed!', error);
    },
  });

  useEffect(() => {
    const cachedData = queryClient.getQueryData('user');
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
      <h2>Utilisateur avec l'ID numéro 2 :</h2>
      {data && data.length > 0 ? (
        <div>
          <p>Nom: {data[0].name}</p>
          <p>Email: {data[0].email}</p>
          <p>Adresse: {data[0].address.street}, {data[0].address.city}, {data[0].address.zipcode}</p>
          <p>Téléphone: {data[0].phone}</p>
          <p>Site web: {data[0].website}</p>
        </div>
      ) : (
        <div>Aucun utilisateur avec l'ID numéro 2 trouvé.</div>
      )}
    </div>
  );
}
