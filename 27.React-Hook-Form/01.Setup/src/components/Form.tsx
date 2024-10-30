
import './form.css'


export default function Form(){
  return (
    <form>

      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>

      <div className="input-group">
        <label htmlFor="website">Website</label>
        <input type="text" id="webdisite" />
      </div>


      <div className="btns">
        <button>Envoyer</button>
      </div>
      
    </form>
  )
}