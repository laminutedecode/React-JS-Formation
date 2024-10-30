// Import des fonctions nécessaires depuis React
import {createContext, useContext, useState} from 'react';

// Création du contexte de l'application avec des valeurs par défaut pour les items et les fonctions associées
const AppContext = createContext({
  items: [],
  createItem: (item)=> {},
  getItem: (id)=> {},
  updateItem: (item)=> {},
});

// Export du composant Store qui va fournir le contexte à ses composants enfants
export default function Store({children}){

  // Déclaration d'un state items avec useState, initialisé à un tableau vide
  const [items, setItems] = useState([]);

  // Fonction pour ajouter un nouvel item dans la liste
  function createItem(item){
    // Création d'une copie du tableau d'items existant
    const temp = [...items];
    // Ajout du nouvel item à cette copie
    temp.push(item);
    // Mise à jour du state items avec le nouveau tableau contenant le nouvel item
    setItems(temp)
  }

  // Fonction pour récupérer un item par son id
  function getItem(id){
    // Utilisation de la méthode find pour rechercher l'item correspondant à l'id donné dans le tableau d'items
    const item = items.find(item => item.id === id);
    // Retourne l'item trouvé
    return item;
  }

  // Fonction pour mettre à jour un item existant
  function updateItem(item){
    // Recherche de l'index de l'item à mettre à jour dans le tableau d'items
    const index = items.findIndex(i => i.id === item.id);
    // Création d'une copie du tableau d'items existant
    const temp = [...items];
    // Remplacement de l'item à l'index trouvé par une copie de l'item mis à jour
    temp[index] = {...item};
  }

  // Rendu du composant AppContext.Provider avec la valeur du contexte définie par les state et fonctions définis précédemment
  return <AppContext.Provider value={{
    items,
    createItem,
    getItem,
    updateItem,
  }}>
    {children}
  </AppContext.Provider>
}

// Fonction personnalisée pour utiliser le contexte de l'application dans d'autres composants
export function useAppContext(){
  // Utilisation du hook useContext pour accéder au contexte de l'application
  return useContext(AppContext)
}
