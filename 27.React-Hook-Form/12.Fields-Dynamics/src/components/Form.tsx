import {useForm, useFieldArray} from 'react-hook-form';
import {DevTool} from "@hookform/devtools"
import './form.css'



let count = 0;

type FormValues = {
  username: string
  email: string
  website: string
  socials: {
    instagram: string,
    tiktok: string,
  };
  phone: string[];
  jobs: {
    job: string;
  }[]
}


export default function Form(){


  const form = useForm<FormValues>({
    defaultValues: {
      username: "La Minute De Code",
      email: "",
      website: "",
      socials: {
        instagram : "",
        tiktok : "",
      },
      phone: ["", ""],
      jobs: [{job: ""}],
    }
  });

  const {register, control, handleSubmit, formState} = form;


  count++

  const onSubmit = (data : FormValues) => {
    console.log("Le formulaire à été soumis", data);
  }

  const {errors} = formState;

  const {fields, append, remove} = useFieldArray({
    name: "jobs",
    control
  })




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


      <div className="input-group">
        <label htmlFor="instagram">Instagram</label>
        <input type="text" id="instagram" {...register('socials.instagram')} />
      </div>

      <div className="input-group">
        <label htmlFor="tiktok">TikTok</label>
        <input type="text" id="tiktok" {...register('socials.tiktok')} />
      </div>

      <div className="input-group">
        <label htmlFor="phoneFixe">Phone</label>
        <input type="text" id="phoneFixe" {...register('phone.0')} />
      </div>

      <div className="input-group">
        <label htmlFor="phoneMobil">Mobil phone</label>
        <input type="text" id="phoneMobil" {...register('phone.1')} />
      </div>


      <div className="input-group">
        <label htmlFor="jobs">Jobs</label>
        <div>
          {fields.map((field, index)=> {
            return (
              <div className="controls" key={field.id}>
                <input type="text"  {...register(`jobs.${index}.job` as const)}/>
                {index > 0 && <button onClick={()=> remove(index)} type="button" className="btn-form">Supprimer</button>}
              </div>
            )
          })}
        </div>
        <button className="btn-form" onClick={()=> append({job: ""})} type="button">Add job</button>
      </div>

    


      <div className="btns">
        <button>Envoyer</button>
      </div>

      <DevTool control={control} />
      
    </form>
  )
}