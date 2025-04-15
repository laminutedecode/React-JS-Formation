// La "data transformation" fait référence au processus de manipulation ou de modification des données brutes pour les adapter aux besoins spécifiques de votre application. Dans le contexte de React Query, la "data transformation" peut inclure plusieurs actions, telles que :

// Formatage des données : Adapter les données brutes à une structure ou à un format plus approprié pour votre application. Par exemple, si les données brutes sont récupérées sous forme de tableau d'objets et que vous avez besoin d'un format différent pour votre interface utilisateur, vous pouvez reformater les données en conséquence.

// Filtrage ou tri : Parfois, les données récupérées peuvent contenir plus d'informations que nécessaire. Vous pouvez filtrer ou trier les données pour ne conserver que celles pertinentes pour votre application.

// Augmentation des données : Vous pouvez enrichir les données avec des informations supplémentaires provenant d'autres sources. Par exemple, si vous récupérez des données utilisateur de base, vous pouvez les enrichir avec des détails supplémentaires à partir d'une autre API ou d'une base de données locale.

// Normalisation des données : Si les données brutes sont complexes ou imbriquées, vous pouvez les normaliser pour les rendre plus faciles à manipuler et à utiliser dans votre application.

// Dans le contexte de l'exemple que vous avez fourni, la "data transformation" est légère. Les données brutes récupérées à partir de l'API randomuser.me sont déjà relativement bien formatées et nécessitent peu de manipulation. Cependant, la mise à jour du cache avec les nouvelles données récupérées via la méthode setQueryData peut être considérée comme une forme de "data transformation", car elle garantit que les données sont stockées dans un format adapté pour une utilisation ultérieure dans l'application.



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
