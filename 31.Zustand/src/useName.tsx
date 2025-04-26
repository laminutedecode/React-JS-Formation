// useName.ts
import {create} from 'zustand';

export interface NameSlice {
  name: string;
}

export const createNameSlice = () => {
  return create<NameSlice>(() => ({
    name: "Jonathan",
  }));
};
