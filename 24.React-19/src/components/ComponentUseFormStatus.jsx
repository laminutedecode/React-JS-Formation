
import {useState} from "react"
import {useFormStatus} from "react-dom"

export default function ComponentUseFormStatus() {

  const [welcomeMessage, setWelcomeMessage] = useState('')

  const actionFunction = async (formData)=> {
    const name = formData.get('name')
    await new Promise((resolve)=> setTimeout(resolve, 1000))
    return name
  }

  const ButtonDesign = ()=> {
    const {isPending} = useFormStatus()
    return <button type="submit" disabled={isPending}>Soumettre</button>
  }

  const handleSubmit = async (event)=> {
    event.preventDefault();
    const formData = new FormData(event.target)
    const name = await actionFunction(formData)
    setWelcomeMessage(`Bonjour ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required placeholder="Indiquez votre nom"/>
      <ButtonDesign />
      {welcomeMessage && <p>{welcomeMessage}</p>}

    </form>
  )
}
