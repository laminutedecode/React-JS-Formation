
// L'Initial Query Data est une fonctionnalité de React Query qui vous permet de fournir des données initiales à une requête lorsque celle-ci est créée pour la première fois. Cela peut être utile lorsque vous avez déjà des données en cache ou lorsque vous souhaitez afficher des données par défaut avant que la requête ne soit effectuée pour la première fois. Lorsque vous définissez une requête à l'aide de useQuery, vous pouvez fournir un objet initialData en tant que troisième argument. Cet objet représente les données initiales que vous souhaitez utiliser pour la requête.Avant que la requête ne soit effectuée pour la première fois, les données initiales sont affichées dans votre composant. Cela garantit une expérience utilisateur plus réactive, car les données sont affichées immédiatement sans attendre que la requête soit terminée.

// Mise à jour des données: Une fois que la requête est effectuée et que les données sont récupérées avec succès, les données initiales sont remplacées par les nouvelles données. Cela garantit que les données affichées dans votre composant sont toujours à jour.
import { useQuery, QueryClient,  } from 'react-query';
import { useEffect } from 'react';
import axios from 'axios';

const queryClient = new QueryClient();



export default function MyComponent() {
  const { data: userData, isLoading, error } = useQuery('user', fetchUser, {
    initialData: { id: 1, name: "John Doe", email: "john.doe@example.com" }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

async function fetchUser() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  return response.data;
}
