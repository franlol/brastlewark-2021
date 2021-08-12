import { createSlice } from '@reduxjs/toolkit';

import gnomesReducer from './gnomes.reducer';
import gnomesInitialState from './gnomes.state';

const gnomesSlice = createSlice({
  name: 'gnomes',
  initialState: gnomesInitialState,
  reducers: gnomesReducer
});

export default gnomesSlice.reducer;
export const { setData, setError, setIsLoading } = gnomesSlice.actions;
