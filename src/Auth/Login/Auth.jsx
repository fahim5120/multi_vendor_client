import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useEffect } from "react";
import { useAppSelector } from "../../Redux Toolkit/store";

const Auth = () => {
  const {auth}=useAppSelector(store=>store)
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="max-w-md h-[85vh] rounded-md  shadow-lg ">
        <img
          className="w-full rounded-t-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2bWJ2G-0hAMbydzu2McZmLFQ4vh_G-Pyxxw&s"
          alt=""
        />
        <div className="mt-8 px-10">
          {isLogin ? <LoginForm /> : <SignupForm />}

          <div className="flex items-center gap-1 justify-center mt-5">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>

            <Button
                
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Signup" : "Login"}
            </Button>
          </div>
        </div>
      </div>
      <Snackbar
  open={auth.otpSent}
  autoHideDuration={6000}
  // onClose={handleClose}
  message="otp sebt successfully"
  
/>
    </div>
  );
};

export default Auth;
