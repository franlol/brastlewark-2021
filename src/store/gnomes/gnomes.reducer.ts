import { PayloadAction } from "@reduxjs/toolkit";
import { TGnome, TGnomesState } from "./gnomes.types";

const gnomesReducer = {
  setData: (state: TGnomesState, action: PayloadAction<Array<TGnome>>) => {
    state.data = action.payload;
  },
  setIsLoading: (state: TGnomesState, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload
  },
  setError: (state: TGnomesState, action: PayloadAction<Error>) => {
    state.error = action.payload.message;
  }
}

export default gnomesReducer;
