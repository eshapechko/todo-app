import {combineReducers, configureStore} from '@reduxjs/toolkit';
import tasksReducer from './tasks/tasksSlice';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
