import React, { useState } from 'react';
import { FormControlLabel, Checkbox, FormGroup, FormControl, FormHelperText } from "@mui/material";

export default function Toggle() {
  const [skills, setSkills] = useState<string[]>([]);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedSkill = event.target.value;
    if (event.target.checked) {
      setSkills([...skills, checkedSkill]);
      console.log(`Added skill: ${checkedSkill}`);
    } else {
      const updatedSkills = skills.filter(skill => skill !== checkedSkill);
      setSkills(updatedSkills);
      console.log(`Removed skill: ${checkedSkill}`);
    }
  }

  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel label="HTML" value="html" control={<Checkbox checked={skills.includes('html')} onChange={handleChecked} />} />
        <FormControlLabel label="CSS" value="css" control={<Checkbox checked={skills.includes('css')} onChange={handleChecked} />} />
        <FormControlLabel label="JS" value="js" control={<Checkbox checked={skills.includes('js')} onChange={handleChecked} />} />
      </FormGroup>
      <FormHelperText>Invalide</FormHelperText>
    </FormControl>
  );
}
