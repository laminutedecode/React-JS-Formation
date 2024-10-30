import {Box, FormControlLabel, Switch} from "@mui/material"
import {useState} from 'react'

export default function Toggle(){

  const [checked, setChecked] = useState(false)

  const handleChecked = ()=> {
    setChecked(!checked)
    console.log(checked);
    
  }

  return (
    <>

      <Box>
        <FormControlLabel  label="Cocher la case" control={<Switch value={checked} onChange={handleChecked}/>} />
        <FormControlLabel  label="Cocher la case" control={<Switch value={checked} onChange={handleChecked}  size="small" color="success" />} />
      </Box>
  
    </>
  )
}