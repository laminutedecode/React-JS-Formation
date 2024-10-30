import { Chip, Avatar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import CloseIcon from '@mui/icons-material/Close';

function MyChip() {
  return (
    <div>
      <Chip label="Basic Chip" />
      <Chip
        label="Clickable Chip"
        onClick={() => console.log('Clickable chip clicked')}
      />

      <Chip
        icon={<FaceIcon />}
        label="Clickable Icon Chip"
        onClick={() => console.log('Clickable icon chip clicked')}
      />

      <Chip
        label="Custom Chip"
        color="secondary"
        onDelete={() => console.log('Delete clicked')}
        deleteIcon={<CloseIcon />}
        avatar={<Avatar alt="Avatar" src="/avatar.jpg" />}
        clickable
        size="small"
      />
      
    </div>
  );
}

export default MyChip;
