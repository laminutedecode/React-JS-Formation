import {create} from "zustand";


interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCount = create<CountState>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));