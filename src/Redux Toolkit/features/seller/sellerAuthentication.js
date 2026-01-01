import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import axios from "axios";
// import { sendLoginSignupOtp } from "../customer/AuthSlice";
import { api } from "../../../Config/Api";

const initialState = {
  otpSent: false,
  error: null,
  loading: false,
  jwt: null,
  role: null,
  //   sellerCreated: "",
};

const API_URL = "/sellers";

/* ======================
   THUNKS
====================== */

// Send login OTP
export const sendLoginOtp = createAsyncThunk(
  "sellers/sendLoginOtp",
  async (email, { rejectWithValue }) => {
    try {
      const response = await api.post(`${API_URL}/send/login-otp`, { email });
      console.log("otp sent -", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to send OTP"
      );
    }
  }
);

// Create seller
export const createSeller = createAsyncThunk(
  "sellers/createSeller",
  async (seller, { rejectWithValue }) => {
    try {
      const response = await api.post(API_URL, seller);
      console.log("create seller", response.data);

      return response.data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

// Verify login OTP
// export const verifyLoginOtp = createAsyncThunk(
//   "sellers/verifyLoginOtp",
//   async ( data , { rejectWithValue }) => {
//     try {
//       const response = await api.post("/api/sellers/verify/login-otp", data);

//       localStorage.getItem("jwt", response.data.jwt);
//          console.log("otp sent ", response.data);
//       data.navigate("/seller");
//       return response.data;
//     } catch (error) {
//       console.log("error", error?.response?.data);
//       return rejectWithValue(
//         error?.response?.data?.message || "Failed to verify OTP"
//       );
//     }
//   }
// );

// export const verifyLoginOtp = createAsyncThunk(
//   "sellers/verifyLoginOtp",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await api.post("/sellers/verify/login-otp", data);

//       localStorage.setItem("jwt", response.data.jwt);

//       data.navigate("/seller");
//       console.log("otp sent ", response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error?.response?.data?.message || "Failed to verify OTP"
//       );
//     }
//   }
// );


export const verifyLoginOtp = createAsyncThunk(
  "sellers/verifyLoginOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/sellers/verify/login-otp",
        { email, otp }
      );
      localStorage.setItem("jwt", response.data.jwt);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to verify OTP"
      );
    }
  }
);


/* ======================
   SLICE
====================== */

const sellerSlice = createSlice({
  name: "sellerAuth",
  initialState,
  reducers: {
    resetSellerAuthState: (state) => {
      state.otpSent = false;
      state.error = null;
      state.loading = false;
      state.jwt = null;
      //   state.sellerCreated = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(sendLoginOtp.fulfilled, (state) => {
        state.otpSent = true;
      })

      .addCase(createSeller.fulfilled, (state, action) => {
        state.jwt = action.payload.jwt;
      })

      .addCase(verifyLoginOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.role = action.payload.role;
      });

    // Create seller
  },
});

export const { resetSellerAuthState } = sellerSlice.actions;
export default sellerSlice.reducer;
