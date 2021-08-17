import { createSlice } from '@reduxjs/toolkit';

import utilsReducer from './utils.reducer';
import utilsInitialState from './utils.state';

const utilsSlice = createSlice({
  name: 'utils',
  initialState: utilsInitialState,
  reducers: utilsReducer
});

export const { setPage, setSearchValue, setSearchGnomesList } = utilsSlice.actions;
export default utilsSlice.reducer;
