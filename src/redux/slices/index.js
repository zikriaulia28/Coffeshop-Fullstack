import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './auth';
import counterSlice from "./counter";

const reducers = combineReducers({
  counter: counterSlice,
  user: userSlice,
});

export default reducers;