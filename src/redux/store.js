import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/authSlice";
import userReducer from "./reducers/userSlice";
import counter from "./reducers/counter";

const authPersistConfig = {
  key: 'auth',
  storage: storage
};

const userPersistConfig = {
  key: 'user',
  storage: storage,
  // whitelist: ["user.data.data"]
};

const cartPersistConfig = {
  key: 'cart',
  storage: storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(userPersistConfig, userReducer),
  cart: persistReducer(cartPersistConfig, counter)
});

export const store = configureStore({
  reducer: rootReducer
});

export const persistor = persistStore(store);

// export default rootReducer;
// const persistedReducer = persistReducer(persistConfig, authReducer, userReducer);

// export const store = configureStore({
//   reducer: {
//     auth: persistedReducer,
//     user: persistReducer,
//   },
// });

// const persistConfig = {
//   key: "root",
//   storage,
// };
