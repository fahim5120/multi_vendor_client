import { Card, Divider } from "@mui/material";
import React from "react";
import PaymentTable from "./PaymentTable";
import { useAppSelector } from "../../Redux Toolkit/store";

const Payment = () => {
   const { seller } = useAppSelector((store) => store);
  return (
    <div className="">
      <div className="space-y-5">
        <Card className="p-5 rounded-md space-y-4">
            <h1>Total Earning</h1>
            <h1 className="font-bold text-xl pb-1">₹ {seller.report?.totalEarnings}</h1>
            <Divider/>
            <p className="py-2">Last Payment: <strong>₹0</strong></p>
        </Card>
        <PaymentTable/>
      </div>
    </div>
  );
};

export default Payment;
