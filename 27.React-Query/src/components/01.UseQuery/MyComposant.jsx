
import { useQuery } from 'react-query';
import {useEffect} from 'react'
import axios from 'axios';

export default function MyComponent() {
  
  const fetchRandomUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=5');
      return response.data.results; // Retourne uniquement la partie "results" de la réponse
    } catch (error) {
      throw new Error('Erreur lors de la récupération des données');
    }
  };


  const { data, isLoading, error } = useQuery('randomUsers', fetchRandomUsers, {
    enabled: true,
  refetchOnMount: false,
  onSuccess: () => console.log('Query succeeded!'),
  onError: () => console.error('Query failed!'),

  });
  

  useEffect(() => {
    if (data) {
      console.log('Données récupérées :', data);
    }
  }, [data]);

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
        {data && data.map((user, index) => (
          <li key={index}>
            <img src={user.picture.thumbnail} alt="Avatar" />
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};


