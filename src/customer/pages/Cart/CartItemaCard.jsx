import { Button, Divider, IconButton } from "@mui/material";
import React from "react";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import Close from '@mui/icons-material/Close';


const CartItemaCard = () => {
  return (
    <div className="border rounded-md relative border-gray-300">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src="https://m.media-amazon.com/images/I/71nUIzvu5VL._AC_SY445_.jpg"
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">Buyza clothing</h1>
          <p className="text-gray-600 font-medium text-sm">
            Turquoise Blue Stonework Satin Designer Saree
          </p>
          <p className="text-gray-400 text-xs ">
            <strong>Sold by:</strong> Natural Lifestyle Products Private Limited
          </p>
          <p className="text-xs">
            <strong>7 days repalcement</strong> available
          </p>
          <p className="text-sm text-gray-500">
            <strong>quantity</strong> : 2
          </p>
        </div>
      </div>
      <Divider />
      <div className="px-5 py-2 flex justify-between item-center ">
        <div className="flex item-center gap-2 w-[140px] justify-between">
          <Button size="small">
            <Remove />
          </Button>
          <span className="px-3 font-semibold">{2}</span>
          <Button size="small">
            <Add />
          </Button>
        </div>
        <div className="">
          <p className="text-gray-700 font semibold"> ₹3999 </p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
<IconButton color="primary">
  <Close/>
</IconButton>
      </div>
    </div>
  );
};

export default CartItemaCard;
