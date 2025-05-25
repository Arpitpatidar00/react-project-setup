import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppTextField, AppStack, AppButton } from "@components";
import { AppAuthWrapper } from "@/modules";
import { ROUTES } from "@/core/global";
import { signupThunk } from "@/core/index";
import { UserType } from "@constants/enums/index";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const SignUpContainer = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        signupThunk({
          email: values.email,
          password: values.password,
          role: UserType.STUDENT,
        })
      );
    },
  });

  return (
    <AppAuthWrapper
      title="Sign Up For An Account"
      subtitle="Create an account to explore personalized recommendations, track your orders, and manage your profile."
      onSubmit={formik.handleSubmit}
      footerLinks={[
        { text: "Already have an account? Log In Now", to: ROUTES.AUTH.LOGIN },
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
          type="password"
          variant="outlined"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <AppTextField
          fullWidth
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          variant="outlined"
          required
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <AppButton
          fullWidth
          variant="contained"
          type="submit"
          size="large"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </AppButton>
      </AppStack>
    </AppAuthWrapper>
  );
};

export default SignUpContainer;
