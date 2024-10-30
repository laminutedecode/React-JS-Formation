
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';




function MyBadge() {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>

        <Badge
        badgeContent={4}
        color="primary"
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <MailIcon />
      </Badge>

     
    </div>
  );
}

export default MyBadge;



