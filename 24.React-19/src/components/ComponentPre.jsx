import { prefetchDNS, preconnect, preload, preinit } from 'react-dom';


export default function ComponentPre() {

  // Préinitialiser un script pour une exécution rapide
  preinit('URL_SCRIPT', { as: 'script' });
  
  // Précharger une police
  preload('URL_FONT', { as: 'font' });
  
  // Précharger une feuille de style
  preload('URL_STYLE', { as: 'style' });
  
  // Précharger le DNS d'un hôte
  prefetchDNS('URL_DNS');
  
  // Préconnecter à un hôte
  preconnect('URL_HOTE');

  return (
    <div>ComponentPre</div>
  )
}
