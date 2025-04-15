// Les "Dependent Queries" (requêtes dépendantes) sont une fonctionnalité de bibliothèques de gestion de l'état comme React Query qui permettent de déclencher une requête en fonction des résultats d'une autre requête. Cela permet de gérer facilement les dépendances entre les requêtes et de garantir que les données sont mises à jour de manière appropriée lorsque les données sources changent. Vous pouvez utiliser les données retournées par les requêtes précédentes pour déterminer les paramètres de la requête suivante. Cela se fait généralement en passant les données des requêtes précédentes comme arguments à la fonction de récupération de données de la requête suivante.Lorsque les données des requêtes précédentes changent, React Query détecte automatiquement ces changements et déclenche les requêtes dépendantes correspondantes.Une fois que les requêtes dépendantes sont terminées, les données sont mises à jour de manière appropriée, et les composants qui utilisent ces données sont rerendus avec les nouvelles données.

import { useQuery, QueryClient } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();


export default function MyComponent() {
  const { data: userData, isLoading: isUserLoading, error: userError } = useQuery('user', fetchUser);
  const userId = userData?.id;

  const { data: postListData, isLoading: isPostListLoading, error: postListError } = useQuery(
    ['posts', userId],
    () => fetchPostList(userId),
    { enabled: !!userId }
  );

  if (isUserLoading || isPostListLoading) {
    return <div>Loading...</div>;
  }

  if (userError || postListError) {
    return <div>Error: {userError || postListError}</div>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <h2>User Posts</h2>
      <ul>
        {postListData.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

async function fetchUser() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  return response.data;
}

async function fetchPostList(userId) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return response.data;
}
