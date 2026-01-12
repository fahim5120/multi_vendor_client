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
import sellerReducer from "./features/seller/sellerSlice";
import transactionReducer from "./features/seller/transactionSlice";
import CustomerSlice from "./features/customer/customer/CustomerSlice";

import adminSlice from "./features/admin/adminSlice";
import dealSlice from "./features/admin/dealSlice";
import AdmincouponReducer from "./features/admin/CouponSlice";

const rootReducer = combineReducers({
  // customer
  auth: authReducer,
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  cart: cartReducer,
  coupon: couponReducer,
  homeCategory: homeCategoryReducer,
  homePage: CustomerSlice,

  //seller reducer
  sellerAuth: sellerAuthReducer,
  sellerOrder: sellerOrderReducer,
  sellerProduct: sellerProductReducer,
  seller: sellerReducer,
  transaction: transactionReducer,

  //admin reducer
  admin: adminSlice,
  deal: dealSlice,
  adminCoupon: AdmincouponReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
