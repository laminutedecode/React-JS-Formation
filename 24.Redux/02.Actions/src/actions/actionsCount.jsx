// Les actions dans Redux sont des objets JavaScript simples qui représentent des événements qui peuvent se produire dans votre application. Elles sont la source d'information principale pour votre application, fournissant un contexte sur ce qui s'est passé. Voici une explication détaillée des actions dans Redux :

// Une action est généralement un objet JavaScript avec une propriété type qui décrit le type de l'action qui s'est produite. Le type est souvent une chaîne de caractères, mais il peut également être un symbole. En outre, une action peut contenir d'autres propriétés qui transportent des données supplémentaires nécessaires pour effectuer le changement d'état. Voici un exemple simple d'action :

export function increment() {
  return {
      type: 'INCREMENT',
      ndDepart: 1, //options supplementaire
  };
}

export function decrement() {
  return {
      type: 'DECREMENT'
  };
}


// Les types d'actions décrivent les événements qui se produisent dans votre application. Il peut s'agir de tout, de l'utilisateur cliquant sur un bouton à une réponse à une requête réseau. Il est important que chaque type d'action soit unique afin que les reducers puissent identifier quelles actions sont déclenchées et comment elles doivent être traitées. Par convention, les types d'actions sont généralement des chaînes de caractères écrites en majuscules, mais cela n'est pas strictement nécessaire.
