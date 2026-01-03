import React, { useEffect } from "react";
import CartItemaCard from "./CartItemaCard";
import LocalOffer from "@mui/icons-material/LocalOffer";
import { Button, TextField } from "@mui/material";
import PricingCard from "./PricingCard";
import Favorite from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/store";
import { fetchCart } from "../../../Redux Toolkit/features/customer/cartSlice";
import { Navigate, useNavigate } from "react-router";


function Cart() {
  const dispatch=useAppDispatch()
    const carttState = useAppSelector((store) => store.cart);
    const cart = carttState.cart;
    const navigate=useNavigate()

  useEffect(
    ()=>{
dispatch(fetchCart(localStorage.getItem("jwt")))
    },[]
  )
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      {cart?.cartItems.length>0 ?<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-3">
          {cart?.cartItems.map((item) => (
            <CartItemaCard key={item._id} item={item}/>
          ))}
        </div>

        <div className="col-span-1 text-sm space-y-3">
          <div className="border  border-gray-300 rounded-md px-5 py-3 space-y-5">
            <div className="">
              <div className="flex gap-3 text-sm items-center">
                <LocalOffer color="primary" sx={{ fontSize: "17px" }} />
                <span>Apply Coupons</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <TextField placeholder="coupon code" size="small" />
              <Button size="small">Apply</Button>
            </div>
          </div>
          <section className="border border-gray-300 rounded-md">
            <PricingCard />
            <div className="p-5">
              <Button onClick={()=>navigate("/checkout/address")} fullWidth variant="contained" sx={{ py: "11px" }}>
                {" "}
                BUY NOW
              </Button>
            </div>
          </section>
          <div className="border border-gray-300 rounded-md px-5 py-4 flex justify-between items-center cursor-pointer ">
            <span>Add From Whishlist</span>
            <Favorite color="primary" />
          </div>
        </div>
      </div>:<><h1 className="text-2xl text-center font-semibold"> Cart is empty</h1></>}
    </div>
  );
}

export default Cart;
