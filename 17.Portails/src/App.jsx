// Les Portails sont  une fonctionnalité de React.js qui permet de rendre des composants enfants à un autre emplacement dans le DOM sans perdre leur état ou leur contexte. Cela peut être particulièrement utile lorsque vous avez besoin de rendre un composant à l'extérieur de son arborescence parente comme les modales, de menus déroulants, ou d'autres éléments d'interface utilisateur qui doivent être rendus en dehors du composant parent.
import './App.css'
import { createPortal } from 'react-dom';

function App() {

  const MyPortal = ({ children }) => {
    const portalRoot = document.getElementById('portal-root');
  
    return createPortal(children, portalRoot);
  };
  


  return (
    <>
     <div>
      <p>Contenu du composant parent</p>
      <MyPortal>
        <p>Contenu du composant enfant rendu via le portail</p>
      </MyPortal>
    </div>
    </>
  )
}



export default App
