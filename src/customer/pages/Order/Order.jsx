// import React, { useEffect } from "react";
// import OrderItemcard from "./OrderItemcard";
// import { useNavigate } from "react-router";
// import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/store";
// import { fetchUserOrderHistory } from "../../../Redux Toolkit/features/customer/orderSlice";


// const Order = () => {
//    const navigate = useNavigate();
//    const  dispatch=useAppDispatch()
  
//  const orderState = useAppSelector((store) => store.order);
//     const orders = orderState.orders;
//     console.log(orders,"orders....");
    
//    useEffect(
//     ()=>{
// dispatch(fetchUserOrderHistory(localStorage.getItem("jwt")))
//     },[dispatch]
//    )
//   return (
//     <div className="text-sm min-h-screen">
//       <div className="pb-5">
//         <h1 className="font-semibold">All Orders</h1>
//         <p>from anytime</p>
//       </div>
//       {/* <div className="space-y-2">
//         {order?.map((order, index) =>
//         order?.orderItems.map((orderItem,index)=> 
//   <OrderItemcard item={orderItem} order={order} key={orderItem._id}  />
// ))}

//       </div> */}
//         <div className="space-y-2">
//         {orders?.map((order) =>
//           order?.orderItems?.map((orderItem) => (
//             <OrderItemcard
//               key={orderItem._id}
//               item={orderItem}
//               order={order}
//             />
//           ))
//         )}
//       </div>


//     </div>
//   );
// };

// export default Order;



import React, { useEffect } from "react";
import OrderItemcard from "./OrderItemcard";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/store";
import { fetchUserOrderHistory } from "../../../Redux Toolkit/features/customer/orderSlice";

const Order = () => {
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((store) => store.order);

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(fetchUserOrderHistory(jwt));
    }
  }, [dispatch, jwt]);

  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
        <p>from anytime</p>
      </div>

      <div className="space-y-2">
        {orders?.length > 0 ? (
          orders.map((order) =>
            order?.orderItems?.map((orderItem) => (
              <OrderItemcard
                key={orderItem._id}
                item={orderItem}
                order={order}
              />
            ))
          )
        ) : (
          <p className="text-gray-500">No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Order;

