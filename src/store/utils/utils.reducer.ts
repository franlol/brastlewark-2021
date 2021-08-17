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
  }
}

export default gnomesReducer;
