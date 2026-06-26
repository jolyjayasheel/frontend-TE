import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../features/favoritesSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer
  }
});