// useCount.ts
import {create} from 'zustand';

export interface CountSlice {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const createCountSlice = () => {
  return create<CountSlice>(set => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 })),
  }));
};
