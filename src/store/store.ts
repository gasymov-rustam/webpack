import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';

import { decrementMinus } from './slices';

export const store = configureStore({
  reducer: {
    [decrementMinus.name]: decrementMinus.reducer,
  },
  devTools: __IS_DEV__,
  middleware: __IS_DEV__ ? (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) : undefined,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
