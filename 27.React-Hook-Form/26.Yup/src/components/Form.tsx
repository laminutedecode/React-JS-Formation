// npm i yup @hookform/resolvers

import {useForm, FieldErrors} from 'react-hook-form';
import {DevTool} from "@hookform/devtools"
import './form.css'

import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object({
  username: yup.string().required('Le username est requis - YUP'),
  email: yup.string().email('Format invalide').required('Le mail est requis - YUP'),
  website: yup.string().required('Le website est requis - YUP'),
})



let count = 0;

type FormValues = {
  username: string
  email: string
  website: string
}


export default function Form(){


  const form = useForm<FormValues>({
    defaultValues: {
      username: "La Minute De Code",
      email: "",
      website: "",
    },
    resolver: yupResolver(schema)
  });

  const {register, control, handleSubmit, formState, trigger} = form;


  count++

  const onSubmit = (data : FormValues) => {
    console.log("Le formulaire à été soumis", data);
  }

  const {errors} = formState;




  const onError = (errors:FieldErrors<FormValues>)=> {
    console.log("Form error", errors);
    
  }

  const handleTrigger = ()=> {
    trigger('username')
  }







  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>

      <h1>FORM - {count / 2}</h1>

      

      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register('username')}/>
      </div>

        <p className={errors.username?.message ? "errorOn": "errorOff"}>{errors.username?.message}</p>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email"  {...register('email')}/>
      </div>

      <p className={errors.email?.message ? "errorOn": "errorOff"}>{errors.email?.message}</p>

      <div className="input-group">
        <label htmlFor="website">Website</label>
        <input type="text" id="webdisite"  {...register('website')}/>
      </div>

      <p className={errors.website?.message ? "errorOn": "errorOff"}>{errors.website?.message}</p>

      <div className="btns">
        <button >Envoyer</button>
      </div>

      <DevTool control={control} />
      
    </form>
  )
}