import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../toolkit/slices/Character";
import filmReducer from "../toolkit/slices/Film";
import planetsReducer from "../toolkit/slices/Planet";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    films: filmReducer,
    planets: planetsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
