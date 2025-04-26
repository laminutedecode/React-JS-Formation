import {create} from "zustand";



interface NameState {
  name: string;
}

export const useName = create<NameState>(() => ({
  name: "Jonathan",
}));


