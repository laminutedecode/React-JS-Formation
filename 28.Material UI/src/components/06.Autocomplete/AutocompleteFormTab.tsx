import {Stack, Autocomplete, TextField} from '@mui/material'
import {useState} from 'react'

type Skill = {
  id: number,
  label: string
}

export default function AutocompleteForm() {
  
  const [skillsValue, setSkillsValue] = useState<Skill | null>(null)
  
  const skills = ['HTML', 'CSS', 'JS'];

  const SkillsOptions = skills.map((skill, index)=> ({
    id: index + 1,
    label: skill,
  }))


  const handleChange = (event: any, newValue: Skill | null)=> {
    setSkillsValue(newValue)
    console.log(newValue);
    
  }


  return (
    <Stack spacing={2} width='250px'>

    <Autocomplete 
    options={SkillsOptions} 
    renderInput={(params) => <TextField {...params}label='Choices' />} 
    value={skillsValue} 
    onChange={handleChange}

    />


    </Stack>
  )
}
