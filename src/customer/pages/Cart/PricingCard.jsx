import { Divider } from "@mui/material";
import React from "react";

const PricingCard = () => {
  return (
    <div className="">
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center ">
          <span>Subtotal</span>
          <span>₹{2499}</span>
        </div>

         <div className="flex justify-between items-center ">
          <span>Discount</span>
          <span>₹{499}</span>
        </div>

         <div className="flex justify-between items-center ">
          <span>Shipping</span>
          <span>₹{79}</span>
        </div>


         <div className="flex justify-between items-center ">
          <span>Plateform fee</span>
          <span>Free</span>
        </div>
        
      </div>
      <Divider/>
        <div className=" font-medium  flex justify-between items-center px-5 py-2">
          <span>Total</span>
          <span>₹{2499}</span>
        </div>
    </div>
  );
};

export default PricingCard;
