// Les "Dynamic Parallel Queries" (requêtes parallèles dynamiques) sont une fonctionnalité avancée de bibliothèques de gestion de l'état comme React Query. Elles permettent de déclencher un ensemble de requêtes en parallèle, où les URL ou les paramètres de requête peuvent être dynamiquement ajustés en fonction de l'état de votre application. Lorsque vous déclenchez les requêtes dynamiques, React Query les exécutera en parallèle. Cela signifie que chaque requête commencera à récupérer les données indépendamment les unes des autres.




import { useQuery, QueryClient } from 'react-query';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function MyComponent() {
  const [userId, setUserId] = useState(1);


  async function fetchUser(userId) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
  }
  
  async function fetchPostList() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
  

  const { data: userData, isLoading: isUserLoading, error: userError } = useQuery(['user', userId], () => fetchUser(userId));

  const { data: postListData, isLoading: isPostListLoading, error: postListError } = useQuery('postList', fetchPostList);

  useEffect(() => {
    // Effect code here
  }, [userData, postListData]);

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

