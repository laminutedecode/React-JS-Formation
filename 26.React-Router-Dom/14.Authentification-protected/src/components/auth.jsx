import {createContext,useContext, useState} from 'react'

// createContext est une fonction fournie par React qui permet de créer un contexte. Un contexte est un mécanisme qui permet de passer des données à travers l'arbre des composants sans avoir besoin de les transmettre explicitement à chaque niveau. Cela permet de partager des données entre des composants profondément imbriqués dans une application React sans passer par des props.


// useContext permet aux composants fonctionnels d'accéder au contexte créé avec createContext(). 

const AuthContext = createContext(null)

//on exporte le provider components
// Le composant Provider permet de fournir des données de manière efficace à tous les composants descendants sans avoir à passer explicitement ces données via les props à chaque niveau de l'arbre des composants. Cela facilite la gestion des données globales et partagées.
export const AuthProvider = ({children})=> {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user)
  }
  const logout = () => {
    setUser(null)
  }


  return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>

}

export const useAuth = () => {
  return useContext(AuthContext)
}


//rajouter AuthProvider dans app