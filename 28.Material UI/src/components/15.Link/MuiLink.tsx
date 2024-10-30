import React from 'react';
import { Link } from '@mui/material';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/about">À Propos</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
        <Link href="/about" color="primary" underline="hover" target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 'bold' }}>
  À Propos
</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;


// href: Spécifie l'URL de destination vers laquelle le lien doit pointer. C'est un attribut obligatoire.


// underline: Définit le style du soulignement du lien. Les valeurs possibles sont "none", "hover", "always", ou "underline" pour activer l'option par défaut.

// target: Spécifie où ouvrir le lien. Les valeurs courantes incluent _self, _blank, _parent, et _top.

// rel: Spécifie la relation entre le document courant et la ressource liée. Cela est souvent utilisé en conjonction avec target="_blank" pour la sécurité.


// onClick: Un événement de clic personnalisé à appeler lorsque le lien est cliqué.

// disabled: Si vrai, le lien sera désactivé.