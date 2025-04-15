import {use, Suspense} from 'react'

export default function ComponentUse() {


    const fetchUserData = ()=> {
      return new Promise((resolve)=> {
        setTimeout(()=> {
          resolve({id: 1, name: 'John Doe', age: 28})
        },2000)
      })
    }

    const UserProfile = ({userProfilePromise}) => {
      const user = use(userProfilePromise);
      return (
        <div>
          <h2>Profile</h2>
          <h1>{user.name}</h1>
          <p>{user.age}</p>
        </div>
      )
    }

    const userProfilePromise = fetchUserData();


  return (
    <Suspense fallback={<div>Chargement en cours...</div>}>
      <UserProfile userProfilePromise={userProfilePromise} />
    </Suspense>
  )
}
