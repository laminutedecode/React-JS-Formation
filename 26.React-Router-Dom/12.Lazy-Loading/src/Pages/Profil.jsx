import {useParams} from "react-router-dom"

export default function Profil() {

  const params = useParams();

  console.log(params);





  const {userId} = params


  return (
    <div>Profil User - {userId}</div>
  )
}
