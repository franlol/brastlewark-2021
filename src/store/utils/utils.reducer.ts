import { PayloadAction } from "@reduxjs/toolkit";
import { TUtilsState } from "./utils.types";

const gnomesReducer = {
  setPage: (state: TUtilsState, { payload }: PayloadAction<number>) => {
    state.pagination.page = payload;
  },
  setSearchValue: (state: TUtilsState, { payload }: PayloadAction<string>) => {
    state.search.value = payload;
  },
  setSearchGnomesList: (state: TUtilsState, { payload }: PayloadAction<Array<string>>) => {
    state.gnomesList = payload;
  },
  addFavourite: (state: TUtilsState, { payload }: PayloadAction<number>) => {
    if (!state.favourites.includes(payload)) state.favourites.push(payload)
  },
  delFavourite: (state: TUtilsState, { payload }: PayloadAction<number>) => {
    console.log(`state.favourites.filter(id => id !== payload)`, state.favourites.filter(id => id !== payload))
    state.favourites = state.favourites.filter(id => id !== payload);
  }
}

export default gnomesReducer;
