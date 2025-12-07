import React from "react";
import CartItemaCard from "./CartItemaCard";
import LocalOffer from "@mui/icons-material/LocalOffer";
import { Button, TextField } from "@mui/material";
import PricingCard from "./PricingCard";
import Favorite from "@mui/icons-material/Favorite";

function Cart() {
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-3">
          {[1, 1, 1, 1, 1].map((item) => (
            <CartItemaCard />
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
              <Button fullWidth variant="contained" sx={{ py: "11px" }}>
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
      </div>
    </div>
  );
}

export default Cart;
