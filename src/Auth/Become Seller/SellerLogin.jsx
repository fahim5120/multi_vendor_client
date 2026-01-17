import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";



import { sendLoginOtp, verifyLoginOtp } from "../../Redux Toolkit/features/seller/sellerAuthentication";
import { useAppDispatch, useAppSelector } from "../../Redux Toolkit/store";



const SellerLogin = () => {
  const auth = useAppSelector((store) => store.auth);
  const sellerAuth = useAppSelector((store) => store.sellerAuth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log("🔁 RENDER SellerLogin");
  console.log("auth:", auth);
  console.log("sellerAuth:", sellerAuth);

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      console.log("🟢 SUBMIT CLICKED");
      console.log("📤 VERIFY PAYLOAD:", values);

      dispatch(
        verifyLoginOtp({
          email: values.email,
          otp: values.otp,
        })
      );
    },
  });

const handleSendOtp = () => {
  const email = "signin_" + formik.values.email;

  console.log("🟡 SEND OTP CLICKED:", email);

  dispatch(sendLoginOtp(email)); // ✅ CORRECT
};


 
  

  useEffect(() => {
    console.log("👀 useEffect WATCH sellerAuth.jwt =", sellerAuth.jwt);

    if (sellerAuth.jwt) {
      console.log("✅ JWT FOUND → redirecting");
      navigate("/seller");
    }
  }, [sellerAuth.jwt, navigate]);

  return (
    <div className="max-w-md mx-auto space-y-5">
      <h1 className="text-2xl font-bold text-teal-600 text-center">
        Seller Login
      </h1>

      <TextField
        fullWidth
        name="email"
        label="Enter Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />

    {sellerAuth.otpSent && (
  <TextField
    fullWidth
    name="otp"
    label="Enter OTP"
    value={formik.values.otp}
    onChange={formik.handleChange}
  />
)}

      <Button
        fullWidth
        variant="contained"
        sx={{ py: "12px" }}
      onClick={
  sellerAuth.otpSent
    ? formik.handleSubmit
    : handleSendOtp
}
      >
       {sellerAuth.otpSent ? "Login" : "Send OTP"}

      </Button>
    </div>
  );
};

export default SellerLogin;
