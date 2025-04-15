import {useState, useTransition} from "react"

export default function ComponentUseTransition() {

  const [name, setName] = useState("")
  const [welcomeMessage, setWelcomeMessage] = useState("")
  const [isPending, startTransition] = useTransition()

  const simulateDelay = (duration)=> {
    return new Promise((resolve)=> {
      setTimeout(resolve, duration)
    })
  }

  const handleSubmit =  async () => {
    startTransition(async ()=> {
      await simulateDelay(3000)
      setWelcomeMessage(`Hello, ${name}!`)
    })
  }



  return (
    <div>
      <input type="text" value={name} onChange={(event)=> setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "Loading..." : "Submit"}
      </button>
      {isPending ? "loading..." : welcomeMessage}
    </div>
  )
}
