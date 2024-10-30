import {useParams} from "react-router-dom"

export default function Profil() {

  const params = useParams();

  console.log(params);

  // const userId = params.userId;

  // /Utilisation du destructuring

  const {userId} = params


  return (
    <div>Profil User - {userId}</div>
  )
}

// http://localhost:5174/users/profil
// http://localhost:5174/users/44
