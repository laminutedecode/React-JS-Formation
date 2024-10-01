// export default function MyComposant({text, item, handleClick}){
  export default function MyComposant({...props}){
  return (
    <>
      <h2>Hello depuis mon composant</h2>

      {props.text}

      <p>Salut {props.item}</p>

      <button onClick={props.handleClick}>Clique ici</button>
    </>
  )
}