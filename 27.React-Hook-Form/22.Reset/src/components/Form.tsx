import {useForm, useFieldArray, FieldErrors} from 'react-hook-form';
import {DevTool} from "@hookform/devtools"
import './form.css'
import { useEffect } from 'react';

type FormValues = {
  username: string
  email: string 
  website: string;
}

export default function Form() {


  const onSubmit = (data : FormValues)=> {
    console.log("formulaire soumis", data);
    
  }


const form = useForm<FormValues>({
  defaultValues: {
    username: "La Minute De Code",
    email: "",
    website: "",
  }
});


const {register, control, handleSubmit, formState, getValues , setValue, watch,reset} = form;


// La fonction reset  sert a réinitialiser le formulaire à son état initial. Cela signifie que tous les champs de formulaire seront effacés et remis à leur valeur initiale.

const {errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount} = formState;



console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount});





const handleSetValues = ()=> {
  setValue("username", "Nom changer", {
    shouldValidate: true,
    shouldDirty: true,
    shouldTouch: true,
  })
}

const handleGetValues = ()=> {
  console.log('get values', getValues(["username", 'email']));
  
}

const onError = (errors: FieldErrors<FormValues>)=> {
  console.log("form error", errors);
  
}

const handleReset = ()=> {
  reset()
}



useEffect(()=> {
  if(isSubmitSuccessful){
    reset()
  }
}, [isSubmitSuccessful])


  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>

      <h1>FORM</h1>

      <label htmlFor="username">Pseudo</label>

      <input type="text" id="username" {...register("username", {
        required: {
          value: true,
          message: "Le champ est requis",
        }
      })} />

      <p className={errors.username?.message ? "errorOn" : "errorOff"}>{errors.username?.message}</p>

      <label htmlFor="email">Email</label>
      <input type="email" id="email"  {...register("email", {
        required: true,
        pattern: {
          value: /^\S+@\S+\.\S+$/,
          message: "Format invalide"
        },
        validate: {
          notAdmin: (fieldValue)=> {
            return( fieldValue !== "admin@gmail.com" || "Entrer une adresse mail differente")
           },
           notblackList: (fieldValue)=> {
            return !fieldValue.endsWith('outlook.fr') || "Non supporter"
           }
        }
      })} />

      <p className={errors.email?.message ? "errorOn" : "errorOff"}>{errors.email?.message}</p>

      <label htmlFor="website">Site</label>
      <input type="text" id="website"  {...register("website")} />



      <button disabled={!isDirty || !isValid }>Envoyer</button>
      <button type="button" onClick={handleGetValues}>Get values</button>
      <button type="button" onClick={handleSetValues}>Set values</button>
      <button type="button" onClick={handleReset}>Rset</button>
      <DevTool control={control} />

    </form>
  )
}
