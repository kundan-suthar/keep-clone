import { create } from "zustand";
import { createNotesSlice } from "./slices/notes.slice";
import { createUiSlice } from "./slices/ui.slice";

export const useAppStore = create((...a) => ({
  ...createNotesSlice(...a),
  ...createUiSlice(...a),
}));
