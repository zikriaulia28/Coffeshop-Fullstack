import { createSlice, createSelector } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    updateProfileRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateProfileSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    updateProfileFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
} = userSlice.actions;

export const selectAuth = createSelector(
  (state) => state.user,
  (user) => user
);

export default userSlice.reducer;