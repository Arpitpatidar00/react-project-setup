import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppTextField, AppStack, AppButton } from "@components";
import { AppAuthWrapper } from "@/modules";
import { ROUTES } from "@/core/global";
import { resetPasswordThunk } from "@/core/index";

const validationSchema = Yup.object({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const ResetPasswordContainer = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(resetPasswordThunk({ password: values.password }));
    },
  });

  return (
    <AppAuthWrapper
      title="Reset Your Password"
      subtitle="Enter your new password to regain access to your account."
      onSubmit={formik.handleSubmit}
      footerLinks={[{ text: "Back to Login", to: ROUTES.AUTH.LOGIN }]}
    >
      <AppStack spacing={2}>
        <AppTextField
          fullWidth
          label="New Password"
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
          {loading ? "Resetting..." : "Reset Password"}
        </AppButton>
      </AppStack>
    </AppAuthWrapper>
  );
};

export default ResetPasswordContainer;
