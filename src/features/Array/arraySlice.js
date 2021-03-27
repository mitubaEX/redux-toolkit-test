import { createSlice } from '@reduxjs/toolkit';

export const arraySlice = createSlice({
  name: 'array',
  initialState: {
    value: [],
  },
  reducers: {
    push: (state, action) => {
      state.value.push(action.payload)
    },
    pop: state => {
      state.value.pop()
    },
  },
});

export const { push, pop } = arraySlice.actions;

export const selectArray = state => state.array.value;

export default arraySlice.reducer;
