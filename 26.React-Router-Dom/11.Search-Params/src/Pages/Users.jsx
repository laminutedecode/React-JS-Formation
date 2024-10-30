import {Outlet, useSearchParams} from 'react-router-dom'

export default function Users() {
    //similaire a useState, pour obtenir les paramètres de recherche
  const [searchParams, setSearchParams ] = useSearchParams();

    // Utilisez setSearchParams pour mettre à jour les paramètres de recherche
  const handleFilter = ()=> {
    setSearchParams({filter: 'active'})
  }
    // Utilisez setSearchParams pour réinitialiser les paramètres de recherche

  const handleReset = ()=> {
    setSearchParams({})
  }


  // rendre un composant via les params

  const showActive = searchParams.get('filter') === 'active'




  return (
    
    <div>
      <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
    </ul>
    <Outlet />
    <button onClick={handleFilter}>Filter</button>
    <button onClick={handleReset}>Reset</button>


    {showActive ? <h2>Active</h2>: <h2>Inactive</h2>}
    </div>
  )
}
