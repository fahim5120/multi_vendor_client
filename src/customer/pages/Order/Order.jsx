import React, { useEffect } from "react";
import OrderItemcard from "./OrderItemcard";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/store";
import { fetchUserOrderHistory } from "../../../Redux Toolkit/features/customer/orderSlice";

const Order = () => {
   const navigate = useNavigate();
   const  dispatch=useAppDispatch()
  
 const orderState = useAppSelector((store) => store.order);
    const order = orderState.orders;
   useEffect(
    ()=>{
dispatch(fetchUserOrderHistory(localStorage.getItem("jwt")))
    },[]
   )
  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
        <p>from anytime</p>
      </div>
      <div className="space-y-2">
        {order?.map((order, index) =>
        order?.orderItems.map((orderItem,index)=> 
  <OrderItemcard orderItem={orderItem} order={order} key={orderItem._id}  />
))}

      </div>
    </div>
  );
};

export default Order;
