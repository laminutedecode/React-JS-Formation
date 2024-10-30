import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

export default function MyMenu() {
  const [open, setOpen] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div>
      <Button variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Ouvrir le Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </div>
  );
}
