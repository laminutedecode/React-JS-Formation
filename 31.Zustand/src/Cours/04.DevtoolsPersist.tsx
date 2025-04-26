import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'



// Les fonctions devtools et persist font partie du middleware fourni par Zustand pour étendre les fonctionnalités de votre store.

// devtools:
// devtools est utilisé pour intégrer votre store avec des outils de développement tels que Redux DevTools Extension ou Reactotron. Cela permet de visualiser et de déboguer l'état de votre store de manière plus conviviale dans ces outils.
// persist:
// persist est utilisé pour la persistance des données. Il permet de sauvegarder l'état du store dans le stockage local du navigateur (localStorage par défaut), de sorte que même après le rechargement de la page, l'état précédent est restauré.
// Vous pouvez spécifier des options telles que la clé de stockage et le transformateur de sérialisation/désérialisation pour adapter le comportement de persistance à vos besoins.

interface CountState {
  count: number
  increase: (by: number) => void
}

const useCountStore = create<CountState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: (by) => set((state) => ({ count: state.count + by })),
      }),
      { name: 'countStore' },
    ),
  ),)


  export default useCountStore