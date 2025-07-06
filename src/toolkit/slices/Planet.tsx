import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchPlanets = createAsyncThunk("planets/fetch", async () => {
  const res = await axios.get("https://swapi.py4e.com/api/planets");
  // console.log("Data:", res.data);
  // console.log("RES: ", res);
  return res.data.results;
});
export interface PlanetType {
  name: string;
  title: string;
  climate: string;
  population: string;
  image?: string;
  id?: number;
}

interface planetState {
  planets: PlanetType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  id: number;
}

const initialState: planetState = {
  planets: [],
  status: "idle",
  error: null,
  id: 3,
};

const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanets.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPlanets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.planets = action.payload; // ← тут мы кладём данные в state
      })
      .addCase(fetchPlanets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Ошибка при загрузке";
      });
  },
});

export default planetsSlice.reducer;
