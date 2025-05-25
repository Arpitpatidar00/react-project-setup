import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppAuthWrapper } from "@/modules";
import { AppButton, AppStack } from "@components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ROUTES } from "@/core/global";
import { verifyOtpThunk } from "@/core/index";

const OtpInput = styled("input")(({ theme }) => ({
  width: 48,
  height: 56,
  margin: "0 6px",
  fontSize: "2rem",
  fontWeight: 600,
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  border: `2px solid ${theme.palette.text.primary}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  "&:focus": {
    borderColor: theme.palette.warning.main,
    outline: "none",
  },
}));

const validationSchema = Yup.object({
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^\d{6}$/, "OTP must be exactly 6 digits"),
});

export const OtpVerificationContainer = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    inputRefs.current = Array(6).fill(null);
  }, []);

  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema,
    onSubmit: (values) => {
      dispatch(verifyOtpThunk({ otp: values.otp }));
    },
  });

  const handleChange = (element, index) => {
    if (!/^\d?$/.test(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    formik.setFieldValue("otp", newOtp.join(""));
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <AppAuthWrapper
      title="Enter OTP"
      subtitle="We've sent a 6-digit code to your email. Enter it below to continue."
      onSubmit={formik.handleSubmit}
      footerLinks={[{ text: "Back to Login", to: ROUTES.AUTH.LOGIN }]}
    >
      <AppStack spacing={3} alignItems="center" sx={{ mt: 2 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {otp.map((data, index) => (
            <OtpInput
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              autoFocus={index === 0}
              inputMode="numeric"
              pattern="[0-9]*"
              aria-label={`OTP digit ${index + 1}`}
            />
          ))}
        </div>
        {formik.touched.otp && formik.errors.otp && (
          <Typography
            variant="body2"
            color="error"
            sx={{ mt: 1 }}
            id="otp-error"
            role="alert"
          >
            {formik.errors.otp}
          </Typography>
        )}

        <AppButton
          fullWidth
          variant="contained"
          type="submit"
          size="large"
          disabled={otp.includes("") || loading}
          aria-describedby={
            formik.touched.otp && formik.errors.otp ? "otp-error" : undefined
          }
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </AppButton>
      </AppStack>
    </AppAuthWrapper>
  );
};

export default OtpVerificationContainer;
