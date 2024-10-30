import { useQuery, QueryClient } from 'react-query';
import { useEffect } from 'react';
import axios from 'axios';

const queryClient = new QueryClient();

const useRandomUsers = () => {
  const fetchRandomUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=5');
      return response.data.results; 
    } catch (error) {
      throw new Error('Erreur lors de la récupération des données');
    }
  };

  const { data, isLoading, error, refetch } = useQuery('randomUsers', fetchRandomUsers, {
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
  }, []);

  return { data, isLoading, error, refetch };
};

export default useRandomUsers;


// Dans cet exemple, nous avons encapsulé la logique de gestion de la requête et du cache dans le hook useRandomUsers. Ce hook peut être utilisé dans n'importe quel composant de votre application pour récupérer les utilisateurs aléatoires sans avoir à répéter la même logique de requête.
