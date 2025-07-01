import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../toolkit/slices/Character";
import { UseDispatch } from "react-redux";
export const store = configureStore({
  reducer: { characters: charactersReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
