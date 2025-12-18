import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../Config/Api";

const initialState = {
  transactions: [],
  
  loading: false,
  error: "",
};

// Fetch transactions by seller
export const fetchTransactionsBySeller = createAsyncThunk(
  "transactions/fetchTransactionsBySeller",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/transactions/seller", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("fetchTransactionsBySeller", response.data);
      return response.data;
    } catch (error) {
      console.log("error transaction", error);
      if (error?.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Failed to fetch transactions");
    }
  }
);


const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
 builder
      .addCase(fetchTransactionsBySeller.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactionsBySeller.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactionsBySeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default transactionSlice.reducer;