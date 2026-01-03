import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../Config/Api";


const API_URL = "/products";


const initialState = {
  product: null,
  products: [],
  loading: false,
  error: "",
  searchProduct: [],
  totalElements: 0,
  totalPages: 0,
};

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/${productId}`);
      console.log("find product by id", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const searchProduct = createAsyncThunk(
  "products/searchProduct",
  async (query, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/search`, {
        params: { query },
      });
      console.log("search product", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error?.response);
      return rejectWithValue(error?.response?.data);
    }
  }
  
);



export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (params , { rejectWithValue }) => {
    try {
      const response = await api.get(API_URL, {
        params: {
          ...params,
          pageNumber: params.pageNumber || 0,
        },
      });
      console.log("get all products ", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error?.response);
      return rejectWithValue(error?.response?.data);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {


      // Get all products (pagination)
      builder.addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      builder.addCase(getAllProducts.fulfilled, (state, action) => {
        // state.paginatedProducts = action.payload;
        state.products = action.payload.content
        state.totalElements = action.payload.totalElements 
        state.totalPages= action.payload.totalPages 
        state.loading = false;
   
      })
      builder.addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      });


// fetchProductById
       builder.addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      builder.addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      builder.addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })




// searchProduct
       builder.addCase(searchProduct.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      builder.addCase(searchProduct.fulfilled, (state, action) => {
        state.searchProduct = action.payload;
        state.loading = false;
      })
      builder.addCase(searchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
  },
});

export default productSlice.reducer;


