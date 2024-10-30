import {create} from "zustand";
import { useCount } from "./useCount";
import { useName } from "./useName";

// Création du store combiné
export const useCombinedStore = create(() => ({
  ...useCount.getState(),
  ...useName.getState(),
}));




