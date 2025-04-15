import React, { useState, useOptimistic } from 'react';

export default function ComponentUseOptimistic() {
  const [serverName, setServerName] = useState('Jonathan');
  const [optimisticName, setOptimisticName] = useOptimistic(serverName);

  const submitNameChange = async (event) => {
    event.preventDefault();
    const newName = event.target.elements.name.value;
    
    setOptimisticName(newName);
    try {
      const updatedName = await updateNameOnServer(newName); 
      setServerName(updatedName); 
    } catch (error) {
      setOptimisticName(serverName); 
      alert("Une erreur est survenue. Le nom n'a pas pu être mis à jour.");
    }
  };

  async function updateNameOnServer(newName) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(newName), 1000); 
    });
  }

  return (
    <div>
      <h1>Changer de nom</h1>
      <form onSubmit={submitNameChange}>
        <p>Nom actuel : {optimisticName}</p>
        <label>Changer de nom : </label>
        <input
          type="text"
          name="name"
          disabled={serverName !== optimisticName}
          placeholder="Nouveau nom"
        />
        <button type="submit">Mettre à jour le nom</button>
      </form>
    </div>
  );
}

