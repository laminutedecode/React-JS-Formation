import {Outlet, useSearchParams} from 'react-router-dom'

export default function Users() {
    
  const [searchParams, setSearchParams ] = useSearchParams();

   
  const handleFilter = ()=> {
    setSearchParams({filter: 'active'})
  }
  

  const handleReset = ()=> {
    setSearchParams({})
  }




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
