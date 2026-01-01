import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../Config/Api";

const API_URL = "/api/sellers/products";

// Fetch seller products
export const fetchSellerProducts = createAsyncThunk(
  "sellerProduct/fetchSellerProducts",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(API_URL, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("seller products", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error?.response);
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Create product
// export const createProduct = createAsyncThunk(
//   "sellerProduct/createProduct",
//   async ({ jwt, request }, { rejectWithValue }) => {
//     try {
//       const response = await api.post(API_URL, request, {
//         headers: { Authorization: `Bearer ${jwt}` },
//       });
//       console.log("create product", response.data);
//       return response.data;
//     } catch (error) {
//       console.log("error", error);
//       return rejectWithValue(error);
//     }
//   }
// );
export const createProduct = createAsyncThunk(
  "sellerProduct/createProduct",
  async ({ jwt, request }, { rejectWithValue }) => {
    try {
      const response = await api.post(API_URL, request, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
       console.log("create product", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Failed to create product"
      );
    }
  }
);


// Update product
export const updateProduct = createAsyncThunk(
  "sellerProduct/updateProduct",
  async ({ jwt, product, productId }, { rejectWithValue }) => {
    try {
      const response = await api.put(`${API_URL}/${productId}`, product, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("update product", response.data);
      return response.data;
    } catch (error) {
      console.log("update product error", error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

const initialState = {
  products: [],
  loading: false,
  error: "",
  //   productCreated: false,
};

const sellerProductSlice = createSlice({
  name: "sellerProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch products
      .addCase(fetchSellerProducts.pending, (state) => {
        state.loading = true;
        state.error = "";
        // state.productCreated = false;
      })
      .addCase(fetchSellerProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchSellerProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch products";
      })

      // Create product
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = "";
        // state.productCreated = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.loading = false;
         state.error = "";
        // state.productCreated = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create product";
        // state.productCreated = false;
      })

      // Update product
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
          state.products[index] = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update product";
      });
  },
});


export default sellerProductSlice.reducer;
