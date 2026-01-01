// import { Button, TextField } from "@mui/material";
// import { useFormik } from "formik";
// import React from "react";
// import {
//   store,
//   useAppDispatch,
//   useAppSelector,
// } from "../../Redux Toolkit/store";
// import { useNavigate } from "react-router-dom";
// import { sendLoginOtp, verifyLoginOtp } from "../../Redux Toolkit/features/seller/sellerAuthentication";
// import { sendLoginSignupOtp } from "../../Redux Toolkit/features/Auth/AuthSlice";

// const SellerLogin = () => {
//   const { sellerAuth,auth } = useAppSelector((store) => store);
//   const navigate=useNavigate()
//   const dispatch = useAppDispatch();
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       otp: "",
//     },
//     onSubmit: (values) => {
//       console.log(values);
 
//       dispatch(verifyLoginOtp(...values,navigate))
//     },
//   });
//   const handleSentOtp = () => {
//     const email="sigin_"+formik.values.email
//     dispatch(sendLoginSignupOtp({ email }));
//   };

//   return (
//     <div>
//       <h1 className="text-2xl-center font-bold  text-teal-600 pb-5">
//         Seller Login
//       </h1>

//       <div className="space-y-5">
//         <div>
//           <TextField
//             fullWidth
//             name="email"
//             label="Enter Your Email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.email && Boolean(formik.errors.email)}
//             helperText={formik.touched.email ? formik.errors.email : ""}
//           />
//         </div>

//         {auth.otpSent && (
//           <div>
//             <TextField
//               fullWidth
//               name="otp"
//               label="otp"
//               value={formik.values.otp}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.otp && Boolean(formik.errors.otp)}
//               helperText={formik.touched.otp ? formik.errors.otp : ""}
//             />
//           </div>
//         )}
//         <div>
//           <Button
//            onClick={auth.otpSent?formik.handleSubmit:handleSentOtp}
//             variant="contained"
//             fullWidth
//             type="submit"
//             sx={{ py: "12px" }}
//           >
//             {auth.otpSent ? "Login" : "sent otp"}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerLogin;



// import { Button, TextField } from "@mui/material";
// import { useFormik } from "formik";
// import React, { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../Redux Toolkit/store";
// import { useNavigate } from "react-router-dom";
// import {
//   sendLoginOtp,
//   verifyLoginOtp,
// } from "../../Redux Toolkit/features/seller/sellerAuthentication";
// import { sendLoginSignupOtp } from "../../Redux Toolkit/features/Auth/AuthSlice";

// const SellerLogin = () => {
// const auth = useAppSelector((store) => store.auth)
// const sellerAuth = useAppSelector((store) => store.sellerAuth);
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//   if (sellerAuth.jwt && sellerAuth.role === "SELLER") {
//     navigate("/seller");
//   }
// }, [sellerAuth.jwt, sellerAuth.role, navigate]);


//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       otp: "",
//     },
//     onSubmit: (values) => {
//       console.log(values);
      
//       dispatch(
//         verifyLoginOtp({...values,navigate}))
//       ;
//     },
//   });

//   const handleSentOtp = () => {
//    const email ="signin_"+formik.values.email
//     dispatch(sendLoginSignupOtp({email}));
//   };


//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-teal-600 pb-5">
//         Seller Login
//       </h1>

//       <div  className="space-y-5">
//         <TextField
//           fullWidth
//           name="email"
//           label="Enter Your Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//         />

//         {auth.otpSent && (
//           <TextField
//             fullWidth
//             name="otp"
//             label="Enter OTP"
//             value={formik.values.otp}
//             onChange={formik.handleChange}
//           />
//         )}

//         <Button
//           onClick={
//             auth.otpSent
//               ? formik.handleSubmit
//               : handleSentOtp
//           }
//           variant="contained"
//           fullWidth
//           sx={{ py: "12px" }}
//         >
//           {auth.otpSent ? "Login" : "Send OTP"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SellerLogin;

import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux Toolkit/store";
import {
  verifyLoginOtp,
} from "../../Redux Toolkit/features/seller/sellerAuthentication";
import {
  sendLoginSignupOtp,
} from "../../Redux Toolkit/features/Auth/AuthSlice";

const SellerLogin = () => {
  const auth = useAppSelector((store) => store.auth);
  const sellerAuth = useAppSelector((store) => store.sellerAuth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    onSubmit: (values) => {
      dispatch(verifyLoginOtp(values));
    },
  });

  const handleSentOtp = () => {
    const email = "signin_" + formik.values.email;
    dispatch(sendLoginSignupOtp({ email }));
  };

  useEffect(() => {
    if (sellerAuth.jwt) {
      navigate("/seller");
    }
  }, [sellerAuth.jwt, navigate]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-teal-600 pb-5">
        Seller Login
      </h1>

      <div className="space-y-5">
        <TextField
          fullWidth
          name="email"
          label="Enter Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        {auth.otpSent && (
          <TextField
            fullWidth
            name="otp"
            label="Enter OTP"
            value={formik.values.otp}
            onChange={formik.handleChange}
          />
        )}

        <Button
          onClick={auth.otpSent ? formik.handleSubmit : handleSentOtp}
          variant="contained"
          fullWidth
          sx={{ py: "12px" }}
        >
          {auth.otpSent ? "Login" : "Send OTP"}
        </Button>
      </div>
    </div>
  );
};

export default SellerLogin;


