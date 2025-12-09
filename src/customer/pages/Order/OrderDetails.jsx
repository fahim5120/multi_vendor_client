import { Box, Button, Divider } from "@mui/material";
import React from "react";
import OrderStepper from "./OrderStepper";
import Payment from "@mui/icons-material/Payment";

const OrderDetails = () => {
  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-center items-center">
        <img
          className="w-[100px]"
          src="https://m.media-amazon.com/images/I/71nUIzvu5VL._AC_SY445_.jpg"
          alt=""
        />

        <div className="text-sm space-y-1 text-center">
          <h1 className="font-semibold text-base">Buyza</h1>

          <p className="text-gray-700">
            Turquoise Blue Stonework Satin Designer Saree
          </p>

          <p className="text-gray-600">
            <strong className="text-gray-800">Size :</strong> FREE
          </p>
        </div>
      </section>

      <section className="border border-gray-200 p-5">
        <OrderStepper />
      </section>

      <section className="border border-gray-200 p-5">
        <h1 className="font-bold pb-3">Delivery Address</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium items-center">
            <p>Rafeeq</p>
            <Divider flexItem orientation="vertical" />
            <p>8136905120</p>
          </div>
          <p>Thazhakkatt, Kottakkal, Malappuram - 676503</p>
        </div>
      </section>

      <section className="border border-gray-200 space-y-4 p-5 rounded-md">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Total Item Price</p>
            <p>
              You saved{" "}
              <span className="text-green-400">₹7500.00 on this item</span>
            </p>
          </div>
          <p>₹ 12495.00</p>
        </div>
        <div className="px-5 ">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
            <Payment />
            <p>Pay on Delivery</p>
          </div>
        </div>

        <Divider />
        <div className="px-5  pt-5">
          <p className="text-xs">
            <strong>Sold by : </strong> Nesi clothing
          </p>
        </div>
        <div className="p-10">
          <Button
            fullWidth
            variant="outlined"
            color="error"
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            CANCEL ORDER
          </Button>
        </div>
      </section>
    </Box>
  );
};

export default OrderDetails;
