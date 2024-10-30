import LinearProgress from '@mui/material/LinearProgress';

import CircularProgress from '@mui/material/CircularProgress';

export default function MyProgress() {
  return (
    <div>
      <CircularProgress color="secondary" size={50} thickness={4} />

      <LinearProgress title='html' color="secondary" variant="determinate" value={50} />
      <br />
      <LinearProgress color="secondary" variant="determinate" value={40} />
      <br />
      <LinearProgress color="secondary" variant="determinate" value={30} />

    </div>
  );
}
