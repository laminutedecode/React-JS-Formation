import { useState, useEffect } from 'react';
import './App.css'

function App() {

    const [utilisateurs, setUtilisateurs] = useState([]);
  
    useEffect(() => {
      // Utilisation de l'API JSONPlaceholder pour récupérer des utilisateurs
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUtilisateurs(data))
        .catch(error => console.error('Erreur lors de la récupération des utilisateurs:', error));
  
      // La fonction de nettoyage sera appelée lorsque le composant est retiré
      return () => {
        // Code de nettoyage ici (si nécessaire)
      };
    }, []); // Les crochets vides signifient que cet effet s'exécute uniquement au montage et au démontage du composant

  return (
    <>
      <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {utilisateurs.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
