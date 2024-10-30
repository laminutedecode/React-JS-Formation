// Le composant "Skeleton" dans Material-UI est utilisé pour représenter temporairement le contenu qui est en cours de chargement ou qui n'est pas encore disponible. Il est souvent utilisé pour fournir une expérience utilisateur plus agréable en montrant une indication visuelle de l'endroit où se trouvera le contenu réel une fois qu'il sera chargé. comme un loader
import Skeleton from '@mui/material/Skeleton';

export default function MySkeleton() {
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
  );
}
