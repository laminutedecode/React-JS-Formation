import {Stack, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'

export default function StackComp() {


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));



  return (
    <>
    <Stack spacing={2}>
      <Typography>Élément 1</Typography>
      <Typography>Élément 2</Typography>
      <Typography>Élément 3</Typography>
    </Stack>

    <Stack direction="row" spacing={2}>
      <Typography>Élément 1</Typography>
      <Typography>Élément 2</Typography>
      <Typography>Élément 3</Typography>
    </Stack>

    {/* //flexbox */}
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
      <Typography>Élément 1</Typography>
      <Typography>Élément 2</Typography>
      <Typography>Élément 3</Typography>
    </Stack>

    {/* text */}

    <Stack textAlign="center">
      <Typography>Élément 1</Typography>
      <Typography>Élément 2</Typography>
      <Typography>Élément 3</Typography>
    </Stack>

    {/* Responsive */}
    <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={2}>
      <Typography>Élément 1</Typography>
      <Typography>Élément 2</Typography>
      <Typography>Élément 3</Typography>
    </Stack>

    {/* /stylisation */}
    <Stack sx={{ backgroundColor: 'primary.main', padding: 2 }}>
      <Typography sx={{ color: 'white' }}>Élément 1</Typography>
      <Typography sx={{ color: 'white' }}>Élément 2</Typography>
      <Typography sx={{ color: 'white' }}>Élément 3</Typography>
    </Stack>

    </>
  )
}
