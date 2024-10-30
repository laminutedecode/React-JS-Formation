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


  const form = useForm<FormValues>();

  const {register, control, handleSubmit} = form;


  count++

  const onSubmit = (data : FormValues) => {
    console.log("Le formulaire à été soumis", data);
    
  }




  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <h1>FORM - {count / 2}</h1>

      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register('username')}/>
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email"  {...register('email')}/>
      </div>

      <div className="input-group">
        <label htmlFor="website">Website</label>
        <input type="text" id="webdisite"  {...register('website')}/>
      </div>


      <div className="btns">
        <button>Envoyer</button>
      </div>

      <DevTool control={control} />
      
    </form>
  )
}