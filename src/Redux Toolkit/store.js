import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";
import authReducer from "./features/Auth/AuthSlice"
import userReducer from "./features/customer/userSlice"
import productReducer from "./features/customer/productSlice"




const rootReducer = combineReducers({
 // customer
  auth: authReducer,
  user:userReducer,
  product:productReducer
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
 