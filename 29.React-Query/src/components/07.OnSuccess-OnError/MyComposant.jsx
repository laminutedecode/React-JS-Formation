// Dans la configuration de useQuery, vous pouvez définir deux callbacks : onSuccess et onError. 




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

    // onSuccess :
    // onSuccess est un callback qui est déclenché lorsque la requête est réussie (lorsque les données sont récupérées avec succès).
    // Il est utilisé pour effectuer des actions spécifiques lorsque la requête est réussie, telles que la mise à jour de l'interface utilisateur avec les données récupérées, l'enregistrement des données dans un état local, etc.
    // Il prend un argument qui est généralement les données récupérées à partir de la requête.
    // Par exemple, vous pouvez utiliser onSuccess pour mettre à jour l'état local avec les données récupérées et afficher ces données dans votre composant.
    
    // onError :
    // onError est un callback qui est déclenché lorsque la requête échoue (par exemple, en cas d'erreur réseau ou d'erreur de serveur).
    // Il est utilisé pour gérer les erreurs survenues pendant la requête. Vous pouvez afficher un message d'erreur à l'utilisateur ou effectuer d'autres actions de gestion des erreurs.
    // Il prend un argument qui est généralement l'erreur survenue pendant la requête.
    // Par exemple, vous pouvez utiliser onError pour afficher un message d'erreur à l'utilisateur lorsqu'une erreur se produit pendant la récupération des données.
    // En résumé, onSuccess et onError sont des callbacks utiles fournis par react-query pour gérer les succès et les échecs des requêtes de manière centralisée. Ils permettent de simplifier la gestion des états de chargement et des erreurs associés aux requêtes.
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
