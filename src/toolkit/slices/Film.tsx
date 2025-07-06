import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchFilms = createAsyncThunk("films/fetch", async () => {
  const res = await axios.get("https://swapi.py4e.com/api/films");
  // console.log("Data:", res.data);
  // console.log("RES: ", res);
  return res.data.results; // массив персонажей
});
export interface FilmType {
  title: string;
  name: "";

  author: string;
  population: string;
  image?: string;
  id?: number;
}

interface filmState {
  films: FilmType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  id: number;
}

const initialState: filmState = {
  films: [], // ← тут будет API-результат
  status: "idle",
  error: null,
  id: 2,
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.films = action.payload; // ← тут мы кладём данные в state
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Ошибка при загрузке";
      });
  },
});

export default filmsSlice.reducer;
