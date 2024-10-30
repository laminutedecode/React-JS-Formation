import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function MyBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Accueil
      </Link>
      <Link color="inherit" href="/about">
        À Propos
      </Link>
      <Typography color="primary">Contact</Typography>
    </Breadcrumbs>
  );
}

export default MyBreadcrumbs;
