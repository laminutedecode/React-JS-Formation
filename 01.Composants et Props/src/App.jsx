
import './App.css'
import MyComposant from './MyComposant'
function App() {
 

  const name = 'Jonathan'


  function handleClick() {
    console.log('Hello depuis la fonction parente');
  }

  return (
    <>
      <MyComposant text='Hello depuis la props parente' item={name} handleClick={handleClick} />
    </>
  )
}

export default App
