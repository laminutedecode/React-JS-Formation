
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function MyTooltip() {
  return (
    <>
    
    <Tooltip title="Supprimer">
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Tooltip>
    

    <Tooltip title="Supprimer" enterDelay={500} leaveDelay={200}>
  <IconButton aria-label="delete">
    <DeleteIcon />
  </IconButton>
</Tooltip>


<Tooltip title="Supprimer" arrow>
  <IconButton aria-label="delete">
    <DeleteIcon />
  </IconButton>
</Tooltip>



<Tooltip title="Supprimer" placement="right">
  <IconButton aria-label="delete">
    <DeleteIcon />
  </IconButton>
</Tooltip>



<Tooltip
  title="Supprimer"
  disableFocusListener
  disableHoverListener
  disableTouchListener
>
  <IconButton aria-label="delete">
    <DeleteIcon />
  </IconButton>
</Tooltip>

    
    </>
  );
}

export default MyTooltip;
