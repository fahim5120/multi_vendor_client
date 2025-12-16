import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../Config/Api";

const initialState = {
  orders: [],
  loading: false,
  error: "",
  orderItem: null,
  currentOrder: null,
  paymentOrder: null,
  orderCanceled: false,
};

const API_URL = "/api/orders";

// Fetch user order history
export const fetchUserOrderHistory = createAsyncThunk(
  "orders/fetchUserOrderHistory",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("fetch user ordder history", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error?.response);
      return rejectWithValue(
        error?.response?.data?.error || "Failed to fetch order history"
      );
    }
  }
);


// Fetch order by ID
export const fetchOrderById = createAsyncThunk(
  "orders/fetchOrderById",
  async ({  jwt ,orderId}, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/${orderId}`, {
        headers: {
          Authorization: `Bearer ${jwt }`,
        },
      });
      console.log("fetch order by id", response.data);
      return response.data;
    } catch (error) {
      console.log("error fetch order", error?.response);
      return rejectWithValue("Failed to fetch order");
    }
  }
);

// Create a new order
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async ({ address, jwt, paymentGateway }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        API_URL,
        { shippingAddress: address },
        {
          headers: { Authorization: `Bearer ${jwt}` },
          params: { paymentMethod: paymentGateway },
        }
      );

      console.log("create order", response.data);

    //   if (response.data?.payment_link_url) {
    //     window.location.href = response.data.payment_link_url;
    //   }

      return response.data;
    } catch (error) {
      console.log("error", error?.response);
      return rejectWithValue("Failed to create order");
    }
  }
);
