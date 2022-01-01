import { configureStore } from '@reduxjs/toolkit'
import {terminalInputSlice} from "./terminal-input";

export const store = configureStore({
  reducer: {
    terminalInput: terminalInputSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch