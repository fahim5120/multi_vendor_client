// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../../../Config/Api";
// import { resetUserState } from "../customer/userSlice";
// import { resetSellerAuthState } from "../seller/sellerAuthentication";

// const API_URL = "/api/auth";

// const initialState = {
//   jwt: null,
//   role: null,
//   loading: false,
//   error: null,
//   otpSent: false,
// };

// export const sendLoginSignupOtp = createAsyncThunk(
//   "auth/sendLoginSignupOtp",
//   async ({ email }, { rejectWithValue }) => {
//     try {
//       const response = await api.post(`${API_URL}/send/login-signup-otp`, {
//         email,
//       });
//       console.log("response", response.data);
//       return response.data;
//     } catch (error) {
//       console.log("error --- ", error);
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// export const signup = createAsyncThunk(
//   "auth/signup",
//   async (signupRequest, { rejectWithValue }) => {
//     try {
//       const response = await api.post(`${API_URL}/signup`, signupRequest);

//       console.log("response", response.data);
//       localStorage.setItem("jwt", response.data.jwt);
//       signupRequest.navigate("/");

//       return response.data;
//     } catch (error) {
//       console.log("error ", error);
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// export const signin = createAsyncThunk(
//   "auth/signin",
//   async (signinRequest, { rejectWithValue }) => {
//     try {
//       const response = await api.post(`${API_URL}/signin`, signinRequest);

//       console.log("response", response.data);
//       localStorage.setItem("jwt", response.data.jwt);
//       signinRequest.navigate("/");

//       return response.data;
//     } catch (error) {
//       console.log("error ", error);
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );


// // export const signin = createAsyncThunk(
// //   "auth/signin",
// //   async ({ email, otp }, { rejectWithValue }) => {
// //     try {
// //       const response = await api.post(`${API_URL}/signin`, {
// //         email,
// //         otp,
// //       });

// //       localStorage.setItem("jwt", response.data.jwt);
// //       return response.data;
// //     } catch (error) {
// //       return rejectWithValue(error.response?.data || error.message);
// //     }
// //   }
// // );

// /* ===========================
//    Slice
// =========================== */

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.jwt = null;
//       state.role = null;
//       state.otpSent = false;
//       localStorage.clear();
//     },
//   },

//   extraReducers: (builder) => {
//     // OTP
//     // .addCase(sendLoginSignupOtp.pending, (state) => {
//     //   state.loading = true;
//     //   state.error = null;
//     // })

//     builder.addCase(sendLoginSignupOtp.fulfilled, (state) => {
//       state.loading = false;
//       state.otpSent = true;
//     });

//     // .addCase(sendLoginSignupOtp.rejected, (state, action) => {
//     //   state.loading = false;
//     //   state.error = action.payload;
//     // })

//     // Signup

//     // .addCase(signup.pending, (state) => {
//     //   state.loading = true;
//     //   state.error = null;
//     // })

//     builder.addCase(signup.fulfilled, (state, action) => {
//       state.jwt = action.payload.jwt;
//       state.role = action.payload.role;
//       // state.loading = false;
//     });

//     //  .addCase(signup.rejected, (state, action) => {
//     //     state.loading = false;
//     //     state.error = action.payload;
//     //   })

//     // Signin

//     // .addCase(signin.pending, (state) => {
//     //   state.loading = true;
//     //   state.error = null;
//     // })

//     builder.addCase(signin.fulfilled, (state, action) => {
//       state.jwt = action.payload.jwt;
//       state.role = action.payload.role;
//       // state.loading = false;
//     });

//     // .addCase(signin.rejected, (state, action) => {
//     //   state.loading = false;
//     //   state.error = action.payload;
//     // })

//     // Reset Password
//     // .addCase(resetPassword.pending, (state) => {
//     //   state.loading = true;
//     //   state.error = null;
//     // })

//     // .addCase(resetPassword.fulfilled, (state) => {
//     //   state.loading = false;
//     // })

//     // .addCase(resetPassword.rejected, (state, action) => {
//     //   state.loading = false;
//     //   state.error = action.payload;
//     // })

//     // Reset Password Request
//     // .addCase(resetPasswordRequest.pending, (state) => {
//     //   state.loading = true;
//     //   state.error = null;
//     // })

//     // .addCase(resetPasswordRequest.fulfilled, (state) => {
//     //   state.loading = false;
//     // })

//     // .addCase(resetPasswordRequest.rejected, (state, action) => {
//     //   state.loading = false;
//     //   state.error = action.payload;
//     // });
//   },
// });

// export const { logout } = authSlice.actions;

// export const performLogout = () => async (dispatch) => {
//   dispatch(logout());
//   dispatch(resetUserState());
//   localStorage.removeItem("jwt")
//   dispatch(resetSellerAuthState());
// };
// export default authSlice.reducer;



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { resetUserState } from "../customer/userSlice";
import { resetSellerAuthState, verifyLoginOtp } from "../seller/sellerAuthentication";

import { Navigate } from "react-router";
import { api } from "../../../Config/Api";

const API_URL = "/api/auth";

const initialState = {
  jwt: null,
  role: null,
  loading: false,
  error: null,
  otpSent: false,
};

/* ===== SEND OTP ===== */
export const sendLoginSignupOtp = createAsyncThunk(
  "auth/sendLoginSignupOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await api.post(`${API_URL}/send/login-signup-otp`, { email });
      console.log("response",response.data);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to send OTP"
      );
    }
  }
);

/* ===== SIGNUP ===== */
// export const signup = createAsyncThunk(
//   "auth/signup",
//   async (signupRequest, { rejectWithValue }) => {
//     try {
//       const res = await api.post(`${API_URL}/signup`, signupRequest);
//       console.log("response",res.data);
      
//       localStorage.setItem("jwt", res.data.jwt);
//       signupRequest.navigate("/")
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Signup failed"
//       );
//     }
//   }
// );

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, otp, fullName }, { rejectWithValue }) => {
    try {
      const res = await api.post(`${API_URL}/signup`, {
        email,
        otp,
        fullName,
      });

      localStorage.setItem("jwt", res.data.jwt);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Signup failed"
      );
    }
  }
);


/* ===== SIGNIN ===== */
// export const signin = createAsyncThunk(
//   "auth/signin",
//   async (signupRequest, { rejectWithValue }) => {
//     try {
//       const res = await api.post(`${API_URL}/signin`, signupRequest);
//       console.log("response",res.data);
//       localStorage.setItem("jwt", res.data.jwt);
//       signupRequest.navigate("/")
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || "Signin failed"
//       );
//     }
//   }
// );


export const signin = createAsyncThunk(
  "auth/signin",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const res = await api.post(`${API_URL}/signin`, { email, otp });
      console.log("response" ,res.data);
      
      localStorage.setItem("jwt", res.data.jwt);
      // if(res.data.role==="ROLE_ADMIN"){
      //   Navigate("/admin")
      // }else Navigate("/")
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Signin failed"
      );
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
      state.role = null;
      state.otpSent = false;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("jwt");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendLoginSignupOtp.fulfilled, (state) => {
        state.otpSent = true;
        state.loading = false;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.jwt = action.payload.jwt;
        state.role = action.payload.role;
        state.otpSent = false;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.jwt = action.payload.jwt;
        state.role = action.payload.role;
        state.otpSent = false;
      })
       .addCase(verifyLoginOtp.fulfilled, (state) => {
      state.otpSent = false;   // ✅ VERY IMPORTANT
    });
  },
});

export const { logout } = authSlice.actions;

export const performLogout = () => async (dispatch) => {
  dispatch(logout());
  dispatch(resetUserState());
  dispatch(resetSellerAuthState());
};

export default authSlice.reducer;










