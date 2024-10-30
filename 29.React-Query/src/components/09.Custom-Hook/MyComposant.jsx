import useRandomUsers from './useRandomUsers';

const MyComponent = () => {
  const { data, isLoading, error, refetch } = useRandomUsers();
  // Avec cette approche, la logique de gestion des requêtes est réutilisable et encapsulée dans le hook useRandomUsers, rendant le composant MyComponent plus simple et plus clair.
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
      <button onClick={refetch}>Recharger les utilisateurs aléatoires</button>
    </div>
  );
};

export default MyComponent;
