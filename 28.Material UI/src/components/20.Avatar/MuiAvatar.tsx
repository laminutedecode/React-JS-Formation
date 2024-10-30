
import  {Avatar,AvatarGroup} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function UserProfile() {
  return (
    <div>
      <Avatar alt="La Minute De Code"  src="https://plus.unsplash.com/premium_photo-1705091310316-fc9fa5335b17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" />
      <Avatar>
        <AccountCircleIcon />
      </Avatar>


      <AvatarGroup max={1}>
        {/* max ou total = 24 */}
        <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1707845690193-ec178cf78041?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Avatar alt="Agnes Walker" src="https://plus.unsplash.com/premium_photo-1683880731561-f0cceb0ad405?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1708367237850-3473e63f8d42?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </AvatarGroup>
    </div>
  );
}

export default UserProfile;
