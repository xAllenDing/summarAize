import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article';

//store is a global state that saves entire info of application
// do not need entire state, just need to reduce it to a specific slice of pie
// in this case is the articleApi
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware)
});