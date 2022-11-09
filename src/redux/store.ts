import { configureStore } from '@reduxjs/toolkit';
import main_data from './data-slice';
export const store = configureStore({
    reducer: {
      market_List : main_data
    },
  })
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
