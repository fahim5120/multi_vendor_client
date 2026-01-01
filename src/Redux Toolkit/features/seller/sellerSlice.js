import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../../Config/Api";

const API_URL = "/sellers";

/* ======================
   INITIAL STATE
====================== */

const initialState = {
  sellers: [],
  selectedSeller: null,
  profile: null,
  loading: false,
  error: null,
  report: null,
  profileUpdated: false,
};

/* ======================
   THUNKS
====================== */

// Fetch seller profile
export const fetchSellerProfile = createAsyncThunk(
  "sellers/fetchSellerProfile",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("fetch seller profile", response.data);
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue("Failed to fetch sellers");
    }
  }
);

// Fetch sellers
export const fetchSellers = createAsyncThunk(
  "sellers/fetchSellers",
  async (status, { rejectWithValue }) => {
    try {
      const response = await api.get(API_URL, { params: { status } });
      console.log("fetch sellers", response.data);
      return response.data;
    } catch (error) {
      console.log("fetch  sellers error message:", error.message);

      return rejectWithValue(error.message);
    }
  }
);

// Fetch seller report
export const fetchSellerReport = createAsyncThunk(
  "sellers/fetchSellerReport",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api${API_URL}/report`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("fetch seller report", response.data);
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(
        error?.response?.data?.message || "Failed to fetch seller report"
      );
    }
  }
);

// Fetch seller by ID
export const fetchSellerById = createAsyncThunk(
  "sellers/fetchSellerById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue("Failed to fetch seller");
    }
  }
);

// Update seller profile
// export const updateSeller = createAsyncThunk(
//   "sellers/updateSeller",
//   async (seller, { rejectWithValue }) => {
//     try {
//       const response = await api.patch(API_URL, seller, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//         },
//       });
//       console.log("seller updated successfully", response.data);
//       return response.data;
//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response) {
//         return rejectWithValue(error.message);
//       }
//       return rejectWithValue("Failed to update seller");
//     }
//   }
// );

// Update seller account status (admin)
export const updateSellerAccountStatus = createAsyncThunk(
  "sellers/updateSellerAccountStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/admin/seller/${id}/status/${status}`);
      console.log("update seller status", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      
      return rejectWithValue("Failed to update seller");
    }
  }
);

// Verify seller email
// export const verifySellerEmail = createAsyncThunk(
//   "sellers/verifySellerEmail",
//   async ({ otp, navigate }, { rejectWithValue }) => {
//     try {
//       const response = await api.patch(`${API_URL}/verify/${otp}`);
//       navigate("/seller-account-verified");
//       console.log("verify seller email", response.data);
//       return response.data;
//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response) {
//         return rejectWithValue(error.message);
//       }
//       return rejectWithValue("Failed to verify seller");
//     }
//   }
// );

// Delete seller
// export const deleteSeller = createAsyncThunk(
//   "sellers/deleteSeller",
//   async (id, { rejectWithValue }) => {
//     try {
//       await api.delete(`${API_URL}/${id}`);
//       return id;
//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response) {
//         return rejectWithValue(error.message);
//       }
//       return rejectWithValue("Failed to delete seller");
//     }
//   }
// );

/* ======================
   SLICE
====================== */

const sellerSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // seller profile
      .addCase(fetchSellerProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.profileUpdated = false;
      })
      .addCase(fetchSellerProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(fetchSellerProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch sellers"
      })

      // sellers list
      .addCase(fetchSellers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellers.fulfilled, (state, action) => {
        state.sellers = action.payload;
        state.loading = false;
      })
      .addCase(fetchSellers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // seller by id
      .addCase(fetchSellerById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerById.fulfilled, (state, action) => {
        state.selectedSeller = action.payload;
        state.loading = false;
      })
      .addCase(fetchSellerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    

      // update seller status
      .addCase(updateSellerAccountStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSellerAccountStatus.fulfilled, (state, action) => {
        const index = state.sellers.findIndex(
          (seller) => seller._id === action.payload._id
        );
        if (index !== -1) {
          state.sellers[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateSellerAccountStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      // seller report
      .addCase(fetchSellerReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerReport.fulfilled, (state, action) => {
        state.loading = false;
        state.report = action.payload;
      })
      .addCase(fetchSellerReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default sellerSlice.reducer;





