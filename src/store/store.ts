import { configureStore } from '@reduxjs/toolkit';
import factsReducer from './factsSlice';

export const store = configureStore({
  reducer: {
    facts: factsReducer,
  },
});

// Добавляем типизированные хуки
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;