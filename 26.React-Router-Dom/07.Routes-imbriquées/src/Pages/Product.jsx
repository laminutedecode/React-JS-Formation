import {Link} from 'react-router-dom'

export default function Product() {
  return (
    <>
      <h1>PAGE PRODUIT</h1>

    <nav className='nav-prod'>
      <ul>
        <li>
          <Link to='all'>All</Link>
          <Link to='new'>New</Link>

          {/* avec /' : cela indique à React Router DOM de naviguer vers le chemin absolu /all. Cela signifie que lorsque l'utilisateur clique sur ce lien, l'URL complète sera mise à jour pour inclure /all, quelle que soit l'URL actuelle. Par exemple, si l'URL actuelle est http://example.com/products, cliquer sur ce lien mènera à http://example.com/all.

          sans / : cela indique à React Router DOM de naviguer vers un chemin relatif, c'est-à-dire un chemin qui est ajouté à l'URL actuelle. Cela signifie que lorsque l'utilisateur clique sur ce lien, l'URL sera mise à jour en ajoutant simplement new à l'URL actuelle. Par exemple, si l'URL actuelle est http://example.com/products, cliquer sur ce lien mènera à http://example.com/products/new. */}

        </li>
      </ul>
    </nav>
    </>
  )
}
