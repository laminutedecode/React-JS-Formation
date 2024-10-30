import {Button, Stack, ButtonGroup} from "@mui/material"



export default function GroupButtons(){
  return (
    <>
      <Stack direction='row'>
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Rigth</Button>
        </ButtonGroup>
      </Stack>
      <br />
      <Stack direction='row'>
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Rigth</Button>
        </ButtonGroup>
      </Stack>
      <br />
      <Stack direction='row'>
        <ButtonGroup variant="text" orientation="vertical" size="small" color="warning" aia-label="alignement buttons group">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Rigth</Button>
        </ButtonGroup>
      </Stack>
       
    </>
  )
}