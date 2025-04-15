import React, { useState, useDeferredValue } from 'react';

export default function ComponentDeferredValue() {
  const [searchInput, setSearchInput] = useState('');
  const deferredSearchInput = useDeferredValue(searchInput, 'Initial Search');

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div>
      <h1>Recherche différée</h1>
      <input
        type="text"
        placeholder="Tapez pour rechercher..."
        value={searchInput}
        onChange={handleInputChange}
      />
      <Results query={deferredSearchInput} />
    </div>
  );
}

function Results({ query }) {
  return (
    <div>
      <p>Résultats pour : {query}</p>
    </div>
  );
}
