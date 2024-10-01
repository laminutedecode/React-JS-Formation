import React, { useState } from 'react';
// Error Boundary"  est un composant spécifique utilisé pour gérer les erreurs qui se produisent lors de l'exécution de composants enfants. L'idée est de délimiter une partie de l'arborescence des composants comme une zone où les erreurs peuvent être capturées et gérées de manière centralisée.

// L'introduction des Error Boundaries dans React vise à améliorer la robustesse de l'application en permettant de gérer les erreurs de manière plus contrôlée et à éviter que l'ensemble de l'application ne s'effondre en raison d'une erreur dans un composant particulier.
// Composant enfant qui peut générer une erreur
const ChildComponent = () => {
  // State pour suivre si une erreur a été déclenchée dans ce composant
  const [hasError, setHasError] = useState(false);

  // Fonction pour déclencher délibérément une erreur
  const throwError = () => {
    setHasError(true);
  };

  // Si une erreur a été déclenchée, lève une erreur JavaScript
  if (hasError) {
    throw new Error('Une erreur s\'est produite dans ChildComponent.');
  }

  // Rendu du composant enfant
  return (
    <div>
      <button onClick={throwError}>Déclencher une erreur</button>
      <p>Composant enfant sans erreur.</p>
    </div>
  );
};

// Error Boundary fonctionnel
const ErrorBoundary = ({ children }) => {
  // State pour suivre si une erreur a été capturée
  const [hasError, setHasError] = useState(false);

  // Fonction pour indiquer qu'une erreur a été capturée
  const handleError = () => {
    setHasError(true);
  };

  // Si une erreur a été capturée, affiche un message d'erreur
  if (hasError) {
    return <p>Une erreur s'est produite dans le composant enfant.</p>;
  }

  // Rendu du composant Error Boundary avec le bouton pour déclencher une erreur dans l'enfant
  return (
    <div>
      <h1>Composant Parent</h1>
      <button onClick={handleError}>Déclencher une erreur dans l'enfant</button>
      {/* Affiche les composants enfants passés en tant que propriété (children) */}
      {children}
    </div>
  );
};

// Utilisation de l'Error Boundary
const App = () => {
  return (
    <ErrorBoundary>
      <ChildComponent />
    </ErrorBoundary>
  );
};
// Dans cet exemple, le composant ChildComponent a un bouton qui, lorsqu'il est cliqué, déclenche délibérément une erreur. L'Error Boundary ErrorBoundary englobe le composant ChildComponent dans le composant App. Lorsque l'erreur est déclenchée dans ChildComponent, elle est capturée par l'Error Boundary, et le message d'erreur est affiché à la place du contenu du composant enfant.
export default App;
