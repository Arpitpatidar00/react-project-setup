import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  signupThunk,
  logoutThunk,
  verifyOtpThunk,
  forgotPasswordThunk,
  resetPasswordThunk,
} from '@/core/store/thunk';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  otpResult: null,
  forgotPasswordResult: null,
  resetPasswordResult: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearOtpResult: (state) => {
      state.otpResult = null;
    },
    clearForgotPasswordResult: (state) => {
      state.forgotPasswordResult = null;
    },
    clearResetPasswordResult: (state) => {
      state.resetPasswordResult = null;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      });

    // Signup
    builder
      .addCase(signupThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Signup failed';
      });

    // Logout
    builder
      .addCase(logoutThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Logout failed';
      });

    // Verify OTP
    builder
      .addCase(verifyOtpThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpResult = null;
      })
      .addCase(verifyOtpThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.otpResult = action.payload;
      })
      .addCase(verifyOtpThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'OTP verification failed';
      });

    // Forgot Password
    builder
      .addCase(forgotPasswordThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.forgotPasswordResult = null;
      })
      .addCase(forgotPasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.forgotPasswordResult = action.payload;
      })
      .addCase(forgotPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to send reset link';
      });


    builder
      .addCase(resetPasswordThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.resetPasswordResult = null;
      })
      .addCase(resetPasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.resetPasswordResult = action.payload;
      })
      .addCase(resetPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Password reset failed';
      });
  },
});
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;


export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.user.token
export const selectUserRole = (state) => state.auth.user?.role || null;

export const selectAuthLoading = (state) => state.auth.loading;

export const selectAuthError = (state) => state.auth.error;

export const { clearError, clearOtpResult, clearForgotPasswordResult, clearResetPasswordResult } = authSlice.actions;
export default authSlice.reducer;