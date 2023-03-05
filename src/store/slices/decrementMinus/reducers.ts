import { PayloadAction } from '@reduxjs/toolkit';

import { IInitialState } from './iInitialState.type';

export const reducers = {
  setDecrementValue: (state: IInitialState, { payload }: PayloadAction<number>) => {
    state.value -= payload;
  },
};
