import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { reducers } from './reducers';

export const decrementMinus = createSlice({
  name: 'decrement',
  initialState,
  reducers,
});

export const { setDecrementValue } = decrementMinus.actions;
