import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../Config/Api";

const API_URL = "/api/users";

export const fetchUserProfile = createAsyncThunk(
  "users/fetchUserProfile",
  async (jwt, { rejectWithValue }) => {
    console.log("jwt.....",jwt);
    try {
      const response = await api.get(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      console.log("fetch user profile", response.data);

      return response.data;
    } catch (error) {
      console.log("error ", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const addUserAddress = createAsyncThunk(
  "users/addUserAddress",
  async ({ address, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `${API_URL}/address`,
        address,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      console.log("address added", response.data);
      return response.data; // updated user
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add address"
      );
    }
  }
);


const initialState = {
  user: null,
  loading: false,
  error: "",
  //   profileUpdated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = "";
    //   state.profileUpdated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addUserAddress.pending, (state) => {
      state.loading = true;
    })
    .addCase(addUserAddress.fulfilled, (state, action) => {
      state.loading = false;
      // console.log("ADDRESS RESPONSE 👉", action.payload);
      state.user = action.payload; // 🔥 updated addresses
    })
    .addCase(addUserAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});


export const { resetUserState } = userSlice.actions;

export default userSlice.reducer;


