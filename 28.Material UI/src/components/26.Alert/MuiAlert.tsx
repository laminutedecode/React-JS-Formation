
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function MyAlert() {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="error">This is an error alert — check it out!</Alert>
    </Stack>
  );
}

export default MyAlert;
