import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/authSlice";
import userReducer from "./reducers/userSlice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

const authPersistConfig = {
  key: 'auth',
  storage: storage
};

const userPersistConfig = {
  key: 'user',
  storage: storage,
  // whitelist: ["user.data.data"]
};

// const persistedReducer = persistReducer(persistConfig, authReducer, userReducer);

// export const store = configureStore({
//   reducer: {
//     auth: persistedReducer,
//     user: persistReducer,
//   },
// });

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer)
});

export const store = configureStore({
  reducer: rootReducer
});

export const persistor = persistStore(store);

// export default rootReducer;