import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: null,
  isLoggedIn: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload
      state.isLoggedIn = true;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isLoading = false;
      state.error = null;
      state.data.token = null;
      state.isLoggedIn = false;
    }
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

export const selectAuth = createSelector(
  (state) => state.auth,
  (auth) => auth
);

export default authSlice.reducer;
