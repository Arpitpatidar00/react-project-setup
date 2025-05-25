import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "@constants/enums/index";
import {
  LoginApi,
  SignupApi,
  OtpApi,
  ForgotPasswordApi,
  ResetPasswordApi,
} from "@services/index";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      const endpointMapping = {
        [UserType.ADMIN]: "adminLogin",
        [UserType.USER]: "userLogin",
      };

      const endpoint = endpointMapping[role] || "userLogin";
      const result = await LoginApi({ email, password }, endpoint);

      if (!result) {
        throw new Error("Login failed");
      }
      return result;
    } catch (error) {
      return rejectWithValue(error?.message || "Login failed");
    }
  }
);

export const signupThunk = createAsyncThunk(
  "auth/signup",
  async ({ role, ...additionalData }, { rejectWithValue }) => {
    try {
      const endpointMapping = {
        [UserType.ADMIN]: "adminSignup",
        [UserType.USER]: "userSignup",
      };

      const endpoint = endpointMapping[role] || "userSignup";
      const result = await SignupApi({ ...additionalData }, endpoint);

      if (!result) {
        throw new Error("Signup failed");
      }
      return result;
    } catch (error) {
      return rejectWithValue(error?.message || "Signup failed");
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("state");
      sessionStorage.clear();
      return true;
    } catch (error) {
      return rejectWithValue(error?.message || "Logout failed");
    }
  }
);

export const verifyOtpThunk = createAsyncThunk(
  "auth/verifyOtp",
  async ({ otp }, { rejectWithValue }) => {
    try {
      const result = await OtpApi({ otp }, "verifyOtp");
      if (!result) {
        throw new Error("OTP verification failed");
      }
      return result;
    } catch (error) {
      return rejectWithValue(error?.message || "OTP verification failed");
    }
  }
);

export const forgotPasswordThunk = createAsyncThunk(
  "auth/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const result = await ForgotPasswordApi({ email }, "forgotPassword");
      if (!result) {
        throw new Error("Failed to send reset link");
      }
      return result;
    } catch (error) {
      return rejectWithValue(error?.message || "Failed to send reset link");
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  "auth/resetPassword",
  async ({ password }, { rejectWithValue }) => {
    try {
      const result = await ResetPasswordApi({ password }, "resetPassword");
      if (!result) {
        throw new Error("Password reset failed");
      }
      return result;
    } catch (error) {
      return rejectWithValue(error?.message || "Password reset failed");
    }
  }
);
