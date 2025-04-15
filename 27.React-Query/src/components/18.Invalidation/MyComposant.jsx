// La "Query Invalidation" est un concept central dans React Query. Il s'agit de la capacité à invalider ou à "rafraîchir" les données d'une requête lorsque des événements spécifiques se produisent dans votre application. Cela garantit que les données affichées à l'utilisateur sont toujours à jour et précises.

// Voici comment cela fonctionne :

// Déclenchement de l'invalidation : L'invalidation peut être déclenchée de différentes manières :

// Manuellement : Vous pouvez appeler la fonction invalidateQueries du queryClient de React Query pour invalider explicitement une ou plusieurs requêtes.
// Automatiquement : Vous pouvez configurer React Query pour qu'il invalide automatiquement une requête en réponse à certaines actions, telles que la réussite d'une mutation.
// Réaction à l'invalidation : Une fois qu'une requête est invalide, React Query réagit en déclenchant une nouvelle requête pour récupérer les données mises à jour à partir de la source de données. Cela se fait de manière transparente pour vous en tant que développeur.

// Mise à jour de l'interface utilisateur : Lorsque les nouvelles données sont récupérées, React Query met automatiquement à jour le cache interne et informe les composants qui utilisent ces données que de nouvelles données sont disponibles. Cela entraîne une mise à jour de l'interface utilisateur avec les dernières informations.



import { useQuery, useMutation, useQueryClient } from 'react-query';

const fetchData = async () => {
  // Fonction pour récupérer les données depuis une source (API, base de données, fichier, etc.)
  const response = await fetch('/api/data');
  return response.json();
};

const updateData = async (updatedData) => {
  // Fonction pour mettre à jour les données
  const response = await fetch('/api/update', {
    method: 'POST',
    body: JSON.stringify(updatedData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

const MyComponent = () => {
  const queryClient = useQueryClient();

  // Utilisation d'une requête pour récupérer les données
  const { data } = useQuery('myData', fetchData);

  // Utilisation d'une mutation pour mettre à jour les données
  const mutation = useMutation(updateData, {
    onSuccess: () => {
      // Après une mutation réussie, invalider la requête pour récupérer les données mises à jour
      queryClient.invalidateQueries('myData');
    },
  });

  const handleUpdate = () => {
    // Exemple : mise à jour des données avec la mutation
    mutation.mutate({ id: 1, title: 'Updated Name' });
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update Data</button>
      <ul>
        {data && data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
