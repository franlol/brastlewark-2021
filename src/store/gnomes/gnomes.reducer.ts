import { PayloadAction } from "@reduxjs/toolkit";
import { TGnome, TGnomesState } from "./gnomes.types";

const gnomesReducer = {
  setData: (state: TGnomesState, action: PayloadAction<Array<TGnome>>) => {
    state.Brastlewark.data = action.payload;
  },
  setIsLoading: (state: TGnomesState, action: PayloadAction<boolean>) => {
    state.Brastlewark.isLoading = action.payload
  },
  setError: (state: TGnomesState, action: PayloadAction<Error>) => {
    state.Brastlewark.error = action.payload.message;
  }
}

export default gnomesReducer;
