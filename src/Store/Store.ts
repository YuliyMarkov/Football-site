import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from '../Features/MatchesSlice';

const store = configureStore({
  reducer: {
    matches: matchesReducer, // Подключаем редьюсер для матчей
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
