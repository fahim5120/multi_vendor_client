import { Avatar } from "@mui/material";
import React from "react";
import ElectricBolt from "@mui/icons-material/ElectricBolt";

const OrderItemcard = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border border-gray-200 rounded-md cursor-pointer">
      <div className="flex items-center gap-3">
        <div>
          <Avatar size="small" sx={{ bgcolor: "#00927c" }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-teal-600">PENDING</h1>
          <p>Arriving by 08/12/2026</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://m.media-amazon.com/images/I/81jo+i4pLfL._AC_SY445_.jpg"
            alt=""
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Buyza</h1>
          <p>Turquoise Blue Stonework Satin Designer Saree</p>

          <p>
            <strong>Size :</strong> FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItemcard;
