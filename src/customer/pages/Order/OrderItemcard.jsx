// import { Avatar } from "@mui/material";
// import React from "react";
// import ElectricBolt from "@mui/icons-material/ElectricBolt";
// import { useNavigate } from "react-router";

// const OrderItemcard = ({ orderItem, order }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       onClick={() => navigate(`/account/orders/${order._id}/item/${orderItem._id}`)}
//       className="text-sm bg-white p-5 space-y-4 border border-gray-200 rounded-md cursor-pointer"
//     >
//       <div className="flex items-center gap-3">
//         <div>
//           <Avatar size="small" sx={{ bgcolor: "#00927c" }}>
//             <ElectricBolt />
//           </Avatar>
//         </div>
//         <div>
//           <h1 className="font-bold text-teal-600">{order.orderStatus}</h1>
//           <p>
//             {" "}
//             Arriving{" "}
//             {order?.deliverDate
//               ? new Date(order.deliverDate).toLocaleDateString()
//               : "Soon"}
//           </p>
//         </div>
//       </div>
//       <div className="p-5 bg-teal-50 flex gap-3">
//         <div>
//           <img
//             className="w-[70px]"
//             src={orderItem.product?.images?.[0]}
//             alt=""
//           />
//         </div>
//         <div className="w-full space-y-2">
//           <h1 className="font-bold">Buyza</h1>
//           <p>{orderItem.product?.title}</p>

//           <p>
//             <strong>Size :</strong> FREE
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderItemcard;

import React from "react";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../util/fomateDate";

const OrderItemCard = ({ item, order }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/account/orders/${order._id}/item/${item._id}`)
      }
      className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBoltIcon />
          </Avatar>
        </div>

        <div>
          <h1 className="font-bold text-teal-600">
            {order.orderStatus}
          </h1>
          <p>Arriving by {formatDate(order.deliverDate)}</p>
        </div>
      </div>

      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src={item.product?.images?.[0]}
            alt="product"
          />
        </div>

        <div className="w-full space-y-2">
          <h1 className="font-bold">
            {item.product?.seller?.businessDetails?.businessName}
          </h1>

          <p>{item.product?.title}</p>

          <p>
            <strong>Size :</strong> FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;

