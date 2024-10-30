import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

function MyDrawer() {
  const [open, setOpen] = useState<boolean>(false); // Définition du type de l'état comme boolean

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
   
      <Drawer
        anchor="right"
        open={open}
      
        onClose={toggleDrawer(false)}
      >
        <div
          role="presentation"
    
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List sx={{width: 300}}>
            {['Accueil', 'À Propos', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default MyDrawer;
