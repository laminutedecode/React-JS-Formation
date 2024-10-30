import React from 'react';
import { useMutation, useQueryClient } from 'react-query'; // Importez useQueryClient au lieu de queryCache
import data from './data.json';

const updateData = async (updatedData) => {
  // Suppose que cette fonction met à jour les données dans votre fichier JSON
  // Vous implémenteriez votre logique pour mettre à jour les données ici
  // Pour cet exemple, supposons que nous contentons de consigner les données mises à jour
  console.log(updatedData);

  // Pour l'exemple, simulons un délai
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulation d'une mise à jour réussie en retournant les données mises à jour
  return updatedData;
};

const MyComponent = () => {
  const queryClient = useQueryClient(); // Utilisez useQueryClient pour obtenir l'instance du client de requête
  const mutation = useMutation(updateData, {
    onSuccess: (data) => {
      // Si la mutation réussit, nous voulons mettre à jour le cache
      // avec les données mutées nouvellement
      queryClient.setQueryData('myData', data);
    },
  });

  const handleMutation = () => {
    // Disons que nous voulons mettre à jour la première entrée dans le tableau de données
    const updatedEntry = { ...data[0], title: 'Nouveau Nom' };

    // Appelez la fonction mutate pour exécuter la mutation
    mutation.mutate(updatedEntry);
  };

  return (
    <div>
      <button onClick={handleMutation}>Mettre à Jour les Données</button>
    </div>
  );
};

export default MyComponent;
