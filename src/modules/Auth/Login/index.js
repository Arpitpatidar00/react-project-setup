import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppTextField, AppStack, AppButton } from "@components";
import { AppAuthWrapper } from "@/modules";
import { ROUTES } from "@/core/global";
import { loginThunk } from "@/core/index";
import { UserType } from "@constants/enums/index";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        loginThunk({
          email: values.email,
          password: values.password,
          role: UserType.STUDENT,
        })
      );
    },
  });

  return (
    <AppAuthWrapper
      title="Log In To Your Account"
      subtitle="Access your account to explore personalized recommendations, track your orders, and manage your profile."
      onSubmit={formik.handleSubmit}
      footerLinks={[
        { text: "Don't have an account? Sign Up Now", to: ROUTES.AUTH.SIGNUP },
        { text: "Having trouble signing in?", to: ROUTES.AUTH.FORGOT_PASSWORD },
      ]}
    >
      <AppStack spacing={2}>
        <AppTextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <AppTextField
          fullWidth
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <AppStack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                sx={{ "&.Mui-checked": { color: "warning.main" } }}
              />
            }
            label="Remember Me"
          />
        </AppStack>
        <AppButton
          fullWidth
          variant="contained"
          type="submit"
          size="large"
          disabled={loading}
          sx={{
            backgroundColor: "warning.main",
            color: "warning.contrastText",
            "&:hover": { backgroundColor: "warning.dark" },
          }}
        >
          {loading ? "Logging In..." : "Login"}
        </AppButton>
      </AppStack>
    </AppAuthWrapper>
  );
}

export default LoginContainer;
