import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";

import { todoPersistConfig } from "./persist";

import todosReducer from "./reducer/todoReducer";
import todoSliceReducer from "./todoSlice";
// untuk slice
import todoSlice from "./todoSlice";

const store = combineReducers({
  todosReducer, // sama dengan todosReducer:todosReducer
  todosToolkitReducer: todoSliceReducer // sama dengan diatas
});

/* 
  dokumentasi 
  https://github.com/rt2zz/redux-persist
*/
export const storeDenganLocalStorage = combineReducers({
  todosReducer, // sama dengan todosReducer:todosReducer
  todosToolkitReducer: persistReducer(todoPersistConfig, todoSliceReducer) // sama dengan diatas
});

// atau dengan cara redux toolkit, kombinasi reducer dengan ini, prefer yang atas, lebih kebaca
export const toolkitStore = configureStore({
  reducer: {
    todosReducer, // sama dengan todosReducer:todosReducer
    todosToolkitReducer: persistReducer(todoPersistConfig, todoSliceReducer)
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  devTools: process.env.NODE_ENV !== "production",
  // preloadedState,
  // reducer: storeDenganLocalStorage
});

export default store;
