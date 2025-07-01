import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "characters/fetch",
  async () => {
    const res = await axios.get(
      "https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json"
    );
    // console.log("Data:", res.data);
    // console.log("RES: ", res);
    return res.data; // массив персонажей
  }
);
export interface CharacterType {
  name: string;
  height: string;
  mass: string;
  gender: string;
  image: string;
}

interface CharacterState {
  characters: CharacterType[];
  loading: boolean;
  error: string | null;
}

const initialState: CharacterState = {
  characters: [], // ← тут будет API-результат
  loading: false,
  error: null,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload; // ← тут мы кладём данные в state
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка при загрузке";
      });
  },
});

export default charactersSlice.reducer;
