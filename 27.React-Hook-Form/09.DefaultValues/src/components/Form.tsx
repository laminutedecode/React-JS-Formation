import {useForm} from 'react-hook-form';
import {DevTool} from "@hookform/devtools"
import './form.css'


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
      website: ""
    }
  });

  const {register, control, handleSubmit, formState} = form;


  count++

  const onSubmit = (data : FormValues) => {
    console.log("Le formulaire à été soumis", data);
  }

  const {errors} = formState;




  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>

      <h1>FORM - {count / 2}</h1>

      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register('username', {
          required: {
            value: true,
            message: "Le champ est requis"
          }
        })}/>
      </div>

        <p className={errors.username?.message ? "errorOn": "errorOff"}>{errors.username?.message}</p>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email"  {...register('email', {
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Format invalide",
          },
          validate: {
            notAdmin: (fieldValue)=> {
                 return fieldValue !== "admin@gmail.com" || "Compte déja existant"
               },
            notBloackList: (fieldValue)=> {
              return !fieldValue.endsWith('outlook.fr') || "Format non supporté"
            }
          }
        })}/>
      </div>

      <p className={errors.email?.message ? "errorOn": "errorOff"}>{errors.email?.message}</p>

      <div className="input-group">
        <label htmlFor="website">Website</label>
        <input type="text" id="webdisite"  {...register('website', {
            required: {
              value: true,
              message: "Le champ est requis"
            },
        })}/>
      </div>

      <p className={errors.website?.message ? "errorOn": "errorOff"}>{errors.website?.message}</p>


      <div className="btns">
        <button>Envoyer</button>
      </div>

      <DevTool control={control} />
      
    </form>
  )
}