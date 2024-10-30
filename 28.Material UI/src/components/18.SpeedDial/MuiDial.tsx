import {useState} from 'react'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import FileCopyIcon from '@mui/icons-material/FileCopy';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copier' },
  { icon: <SaveIcon />, name: 'Sauvegarder' },
  { icon: <PrintIcon />, name: 'Imprimer' },
  { icon: <ShareIcon />, name: 'Partager' },
];

function MySpeedDial() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <SpeedDial
      ariaLabel="Actions"
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}

      open={open}
      direction="up"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  );
}

export default MySpeedDial;
