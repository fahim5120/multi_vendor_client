import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";
import authReducer from "./features/Auth/AuthSlice";
import userReducer from "./features/customer/userSlice";
import productReducer from "./features/customer/productSlice";
import orderReducer from "./features/customer/orderSlice";
import cartReducer from "./features/customer/cartSlice";
import couponReducer from "./features/customer/couponSlice";
import homeCategoryReducer from "./features/customer/HomeCategorySlice";
import sellerAuthReducer from "./features/seller/sellerAuthentication";
import sellerOrderReducer from "./features/seller/sellerOrderSlice";
import sellerProductReducer from "./features/seller/sellerProductSlice";
import sellerreducer from "./features/seller/sellerSlice";

const rootReducer = combineReducers({
  // customer
  auth: authReducer,
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  cart: cartReducer,
  coupon: couponReducer,
  homeCategory: homeCategoryReducer,

  //seller reducer
  sellerAuth: sellerAuthReducer,
  sellerOrder: sellerOrderReducer,
  sellerProduct: sellerProductReducer,
  seller: sellerreducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
