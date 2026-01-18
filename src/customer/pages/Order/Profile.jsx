import { Divider } from "@mui/material";
import React from "react";
import Order from "./Order";
import OrderDetails from "./OrderDetails";
import { Route, Routes, useNavigate, useLocation } from "react-router";
import UserDetails from "../Account/UserDetails";
import { performLogout } from "../../../Redux Toolkit/features/Auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/store";
import SavedCards from "./SavedCards";
import Addresses from "./Addresses";

const menu = [
  { name: "Orders", path: "/account/orders" },
  { name: "Profile", path: "/account" },
  { name: "Saved Cards", path: "/account/saved-card" },
  { name: "Addresses", path: "/account/addresses" },
  { name: "Logout", path: "/" },
];

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.user);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(performLogout());
    navigate("/");
  };

  const handleClick = (item) => {
    if (item.name === "Logout") {
      handleLogout();
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="px-4 lg:px-52 min-h-screen mt-8">
      {/* USER NAME */}
      <h1 className="text-xl font-bold mb-4">
        {user?.fullName}
      </h1>

      <Divider />

      {/* LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
        {/* MENU */}
        <div className="col-span-1 lg:border-r border-gray-300 py-4">
          {/* MOBILE MENU */}
          <div className="flex lg:hidden gap-3 overflow-x-auto pb-3">
            {menu.map((item) => (
              <button
                key={item.path}
                onClick={() => handleClick(item)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap
                  ${
                    location.pathname === item.path
                      ? "bg-teal-500 text-white"
                      : "bg-gray-100"
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex flex-col gap-3 pr-5">
            {menu.map((item) => (
              <div
                key={item.path}
                onClick={() => handleClick(item)}
                className={`px-5 py-3 rounded-md cursor-pointer
                  ${
                    location.pathname === item.path
                      ? "bg-teal-500 text-white"
                      : "hover:bg-teal-500 hover:text-white"
                  }`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-2 lg:pl-6 py-5">
          <Routes>
            <Route path="/" element={<UserDetails />} />
            <Route path="/orders" element={<Order />} />
            <Route
              path="/orders/:orderId/item/:orderItemId"
              element={<OrderDetails />}
            />
            <Route path="/saved-card" element={<SavedCards />} />
            <Route path="/addresses" element={<Addresses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;








// import { Divider } from "@mui/material";
// import React from "react";
// import Order from "./Order";
// import OrderDetails from "./OrderDetails";
// import { Route, Routes, useNavigate } from "react-router";
// import UserDetails from "../Account/UserDetails";
// import { performLogout } from "../../../Redux Toolkit/features/Auth/AuthSlice";
// import { store, useAppDispatch, useAppSelector } from "../../../Redux Toolkit/store";
// import SavedCards from "./SavedCards";
// import Addresses from "./Addresses";

// const menu = [
//   { name: "orders", path: "/account/orders" },
//   { name: "profile", path: "/account" },
//   { name: "Saved Cards", path: "/account/saved-card" },

//   { name: "Addresses", path: "/account/addresses" },
//   { name: "Logout", path: "/" },
// ];
// const Profile = () => {

//   const dispatch=useAppDispatch()
//   const {user}=useAppSelector(store=>store)
//   const navigate = useNavigate()
//   const handleClick = (item) => {
//     if(item.name==="Logout")handleLogout()
//     navigate(item.path)
//   }
//   const handleLogout=()=>{
//    dispatch(performLogout())
//   }
//   return (
//     <div className="px-5 lg:px-52 min-h-screen mt-10">
//       <div>
//         <h1 className="text-xl font-bold pb-5"> {user.user?.fullName}</h1>
//       </div>
//       <Divider />
//       <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
//         <div className="col-span-1 lg:border-r border-gray-300 lg:pr-5 py-5 h-full flex flex-row flex-wrap lg:flex-col gap-3">
//           {menu.map((item, index) => (
//             <div
//               onClick={() => handleClick(item)}
//               key={item.path}
//               className="px-5 py-3 rounded-md hover:bg-teal-500 hover:text-white cursor-pointer"
//             >
//               <p>{item.name}</p>
//             </div>
//           ))}
//         </div>
//         <div className="lg:col-span-2 lg:pl-5 py-5">
//           <Routes>
//             <Route path="/" element={<UserDetails />} />
//             <Route path="/orders" element={<Order />} />
//             <Route
//               path="/orders/:orderId/item/:orderItemId"
//               element={<OrderDetails />}
//             />
//              <Route path='/saved-card' element={<SavedCards />} />
//               <Route path='/addresses' element={<Addresses />} />
//           </Routes>
//           {/* <Order/> */}
//           <OrderDetails />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
