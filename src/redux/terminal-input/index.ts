import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface TerminalInputState {
  value: string
}

const initialState: TerminalInputState = {
  value: ''
}

export const terminalInputSlice = createSlice({
  name: 'terminalInput',
  initialState,
  reducers: {
    setNewInputCommand: ((state, action: PayloadAction<string>) => {
      state.value = action.payload
    })
  }
});

export const { setNewInputCommand } = terminalInputSlice.actions;
export const selectTerminalInput = (state: RootState) => state.terminalInput.value;
export default terminalInputSlice.reducer;