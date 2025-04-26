import {create} from "zustand"

interface State {
  name: string;
  count: number;
  increment: ()=> void;
  decrement: ()=> void;

}

export const useStore = create<State>(set => ({
  name: "Jonathan",
  count: 0,
  increment: () => set(state => ({count: state.count + 1})),
  decrement: () => set(state => ({count: state.count - 1})),
}))


