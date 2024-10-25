import {useState, useActionState} from "react"

export default function ComponentUseActionState() {

  const [name, setName] = useState('')
  const [error, submitAction, isPending] = useActionState(
    async(previousState, newName)=> {
      const error = await simulateUpdatedName(newName)
      return error
    },
    null
  )

  const handleSubmit = ()=> {
    submitAction(name)
  }

  const simulateUpdatedName = async (newName)=> {
    await new Promise((resolve)=> setTimeout(resolve, 1000))
    if(newName === ""){
      return "Le nom ne peut pas être vide"
    }
    return null
  }

  
  return (
    <div>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "En cours..." : "Valider"}
      </button>
      {error && <p>{error}</p>}
    </div>
  )
}
