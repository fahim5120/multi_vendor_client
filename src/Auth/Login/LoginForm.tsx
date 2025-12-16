import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../Redux Toolkit/store";
import {
  sendLoginSignupOtp,
  signin,
} from "../../Redux Toolkit/features/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useAppSelector((store) => store.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      dispatch(signin({ ...values, navigate }));
        //  dispatch(signin(values))
      console.log(values);
    },
  });

  const handleSentOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };
  return (
    <div>
      <h1 className="text-2xl-center font-bold  text-teal-600 pb-5">Login</h1>

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <TextField
            fullWidth
            name="email"
            label="Enter Your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email ? formik.errors.email : ""}
          />
        </div>

        {auth.otpSent && (
          <div>
            <TextField
              fullWidth
              name="otp"
              label="otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp ? formik.errors.otp : ""}
            />
          </div>
        )}
        <div>
          <Button
            onClick={auth.otpSent ? formik.handleSubmit : handleSentOtp}
            variant="contained"
            fullWidth
            type="submit"
            sx={{ py: "12px" }}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
