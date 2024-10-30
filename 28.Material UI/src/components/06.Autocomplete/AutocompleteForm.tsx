import {Stack, Autocomplete, TextField} from '@mui/material'
import {useState} from 'react'
export default function AutocompleteForm() {
  const [skillsValue, setSkillsValue] = useState<string | null>(null)
  const skills = ['HTML', 'CSS', 'JS'];
  const handleChange = (event: any, newValue: string | null)=> {
    setSkillsValue(newValue)
    console.log(newValue);
    
  }
  return (
    <Stack spacing={2} width='250px'>

    <Autocomplete 
    options={skills} 
    renderInput={(params) => <TextField {...params} label='Choices' 
    value={skillsValue} />} 
    onChange={handleChange}
    freeSolo
    />
    </Stack>
  )
}
