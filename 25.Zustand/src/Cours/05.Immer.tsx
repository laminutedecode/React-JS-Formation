import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
// immer est une bibliothèque JavaScript qui facilite la mise à jour immuable des données. Il est souvent utilisé comme middleware dans les stores Zustand pour simplifier la mise à jour de l'état.
type State = {
  count: number
}

type Actions = {
  increment: (qty: number) => void
  decrement: (qty: number) => void
}

export const useCountStore = create<State & Actions>()(
  immer((set) => ({
    count: 0,
    increment: (qty: number) =>
      set((state) => {
        state.count += qty
      }),
    decrement: (qty: number) =>
      set((state) => {
        state.count -= qty
      }),
  })),
)