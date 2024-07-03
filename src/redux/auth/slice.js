import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    authLoading: false,
    isError: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.authLoading = true;
        state.isError = false;
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isError = false;
        state.authLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, state => {
        state.authLoading = false;
        state.isLoggedIn = false;
        state.isError = true;
      })
      .addCase(login.pending, state => {
        state.isError = false;
        state.isLoggedIn = false;
        state.authLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authLoading = false;
        state.isLoggedIn = true;
        state.isError = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, state => {
        state.authLoading = false;
        state.isLoggedIn = false;
        state.isError = true;
      })
      .addCase(logout.pending, state => {
        state.isError = false;
        state.authLoading = true;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isError = false;
        state.authLoading = false;
      })
      .addCase(logout.rejected, state => {
        state.isLoggedIn = true;
        state.isError = true;
        state.authLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.authLoading = false;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
