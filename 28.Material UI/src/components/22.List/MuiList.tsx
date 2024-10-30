
import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';

function MyList() {
  return (
    <List dense subheader={<ListSubheader>Options</ListSubheader>}>
      <ListItem  onClick={() => console.log('Item 1 clicked')}>
        <ListItemText primary="Item 1" />
      </ListItem>
      <ListItem  onClick={() => console.log('Item 2 clicked')}>
        <ListItemText primary="Item 2" />
      </ListItem>
      <ListItem  onClick={() => console.log('Item 3 clicked')}>
        <ListItemText primary="Item 3" />
      </ListItem>
    </List>
  );
}

export default MyList;


