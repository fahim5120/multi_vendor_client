import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../Config/Api";

const initialState = {
  cart: null,
  loading: false,
  error: "",
};

const API_URL = "/api/cart";

// Fetch user cart
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(API_URL, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Cart fetch cart", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error);
    }
  }
);

// Add item to cart
export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async ({ jwt, request }, { rejectWithValue }) => {
    try {
      const response = await api.put(`${API_URL}/add`, request, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("add item to cart", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error);
    }
  }
);


// Update cart item
export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async ({ jwt, cartItemId, cartItem }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `${API_URL}/item/${cartItemId}`,
        cartItem,
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
         console.log("update cart item", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Delete cart item
export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async ({ jwt, cartItemId }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${API_URL}/item/${cartItemId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
        console.log("delete item from cart", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);




/* ======================
   SLICE
====================== */

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCartState: (state) => {
      state.cart = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch cart
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        // state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.loading = false;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



       // Add item
      .addCase(addItemToCart.pending, (state) => {
        state.loading = true;
        // state.error = null;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.loading = false
        if (state.cart) {
          state.cart.cartItems.push(action.payload);
        }
       
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



        // Update cart item
      .addCase(updateCartItem.pending, (state) => {
        state.loading = true;
        // state.error = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
         state.loading = false;

         if (state.cart) {
          const index = state.cart.cartItems.findIndex(
            (item) => item._id === action.payload._id
          );

          if (index !== -1) {
            state.cart.cartItems[index] = action.payload
          }

        //   const mrpPrice = sumCartItemMrpPrice(
        //     state.cart.cartItems || []
        //   );
        //   const sellingPrice = sumCartItemSellingPrice(
        //     state.cart.cartItems || []
        //   );

        //   state.cart.totalMrpPrice = mrpPrice;
        //   state.cart.totalSellingPrice = sellingPrice;
        }
      
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })




        // Delete cart item
      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true;
        // state.error = null;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.loading = false;
        if (state.cart) {
          state.cart.cartItems = state.cart.cartItems.filter(
            (item) => item._id !== action.payload._id
          );

        //   const mrpPrice = sumCartItemMrpPrice(
        //     state.cart.cartItems || []
        //   );
        //   const sellingPrice = sumCartItemSellingPrice(
        //     state.cart.cartItems || []
        //   );

        //   state.cart.totalMrpPrice = mrpPrice;
        //   state.cart.totalSellingPrice = sellingPrice;
        }
       
      })
      .addCase(deleteCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


  }
   
});



export default cartSlice.reducer;


