// npm install @mui/material @emotion/react @emotion/styled


import {useForm} from 'react-hook-form';
import {TextField, Button, Stack} from "@mui/material";
import {DevTool} from '@hookform/devtools'

type FormValues = {
  login: string
  password: string
}



export default function Form(){

const form = useForm<FormValues>({
  defaultValues: {
    login: "",
    password: "",
  }
})


const {register, handleSubmit, formState, control} = form

const {errors} = formState

const onSubmit = (data: FormValues) => {
  console.log(data);
  
}

  return (
    <>
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} width={400}>
        <TextField label="login" type="email"{...register('login', {required: "Login requis"})} error={!!!errors.login} helperText={errors.login?.message}/>
        <TextField label="Password" type="password" {...register('password', {required: "Password requis"})} error={!!!errors.password} helperText={errors.password?.message}/>
        <Button type="submit" variant="contained" color="primary">Envoyer</Button>
      </Stack>
    </form>
    <DevTool control={control} />
    </>
  )
}