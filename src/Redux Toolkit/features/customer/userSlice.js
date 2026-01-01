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
    });
  },
});


export const { resetUserState } = userSlice.actions;

export default userSlice.reducer;


