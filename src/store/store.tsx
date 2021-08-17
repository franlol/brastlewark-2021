import { configureStore } from '@reduxjs/toolkit';

import gnomesReducers from './gnomes/gnomes.slice';
import utilsReducers from './utils/utils.slice';

export const store = configureStore({
  reducer: {
    gnomes: gnomesReducers,
    utils: utilsReducers
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type TStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
