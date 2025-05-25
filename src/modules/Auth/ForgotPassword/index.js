import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppTextField, AppStack, AppButton } from "@components";
import { AppAuthWrapper } from "@/modules";
import { ROUTES } from "@/core/global";
import { forgotPasswordThunk } from "@/core/index";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(forgotPasswordThunk({ email: values.email }));
    },
  });

  return (
    <AppAuthWrapper
      title="Forgot Password"
      subtitle="Enter your email to receive a password reset link."
      onSubmit={formik.handleSubmit}
      footerLinks={[
        { text: "Back to Login", to: ROUTES.AUTH.LOGIN },
        { text: "Need an account? Sign Up", to: ROUTES.AUTH.SIGNUP },
      ]}
    >
      <AppStack spacing={2}>
        <AppTextField
          fullWidth
          label="Email Address"
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
        <AppButton
          fullWidth
          variant="contained"
          type="submit"
          size="large"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </AppButton>
      </AppStack>
    </AppAuthWrapper>
  );
}
