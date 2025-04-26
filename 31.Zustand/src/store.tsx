// useBoundStore.ts
import {create} from 'zustand';
import { createCountSlice, CountSlice } from './useCount';
import { createNameSlice, NameSlice } from './useName';

// Combine les interfaces pour former CombinedState
export interface CombinedState extends CountSlice, NameSlice {}

export const useBoundStore = create<CombinedState>(() => {
  const countSlice = createCountSlice();
  const nameSlice = createNameSlice();

  return {
    ...countSlice,
    ...nameSlice,
  };
});
