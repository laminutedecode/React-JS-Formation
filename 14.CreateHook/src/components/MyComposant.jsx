import React from 'react';
import useApiData from '../hooks/useAPI';

export default function MyComposant() {
  const apiEndpoint = 'https://jsonplaceholder.typicode.com/todos/1';
  const { data, loading, error } = useApiData(apiEndpoint);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Une erreur s'est produite : {error.message}</p>;
  }


  return (
    <div>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Completed: {data.completed ? 'Oui' : 'Non'}</p>
    </div>
  );
}
