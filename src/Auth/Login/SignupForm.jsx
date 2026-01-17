import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../Redux Toolkit/store";
import { sendLoginSignupOtp, signup } from "../../Redux Toolkit/features/Auth/AuthSlice";

const SignupForm = () => {
  const auth = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log(auth,"auth...");

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      fullName: "",
    },
    onSubmit: (values) => {
      dispatch(signup(values));
    },
  });

  const handleSentOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };

  useEffect(() => {
    if (auth.jwt) {
      navigate("/");
    }
  }, [auth.jwt, navigate]);

  return (
    <div>
      <h1 className="text-2xl-center font-bold text-teal-600 pb-5">Signup</h1>

      <div className="space-y-5">
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        {auth.otpSent && (
          <>
            <TextField
              fullWidth
              name="otp"
              label="OTP"
              value={formik.values.otp}
              onChange={formik.handleChange}
            />

            <TextField
              fullWidth
              name="fullName"
              label="Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
          </>
        )}

        <Button
          variant="contained"
          fullWidth
          sx={{ py: "12px" }}
          onClick={auth.otpSent ? formik.handleSubmit : handleSentOtp}
        >
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
