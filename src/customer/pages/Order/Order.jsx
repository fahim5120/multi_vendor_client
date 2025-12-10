import React from "react";
import OrderItemcard from "./OrderItemcard";
import { useNavigate } from "react-router";

const Order = () => {
   const navigate = useNavigate();
  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
        <p>from anytime</p>
      </div>
      <div className="space-y-2">
        {[1, 1, 1, 1, 1].map((item, index) => (
  <OrderItemcard key={index}  />
))}

      </div>
    </div>
  );
};

export default Order;
