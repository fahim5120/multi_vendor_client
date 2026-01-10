// import React, { useState } from "react";
// import Button from "@mui/material/Button";

// import AddIcon from "@mui/icons-material/Add";
// import {
//   Box,
//   FormControlLabel,
//   Modal,
//   Radio,
//   RadioGroup,
//   Typography,
// } from "@mui/material";
// import AddressForm from "./AddressForm";
// import Addresscard from "./Addresscard";
// import PricingCard from "../Cart/PricingCard";
// import { createOrder } from "../../../Redux Toolkit/features/customer/orderSlice";
// import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/store";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 500,
//   bgcolor: "background.paper",

//   boxShadow: 24,
//   p: 4,
// };
// const paymentGatewayList = [{ name: "RAZORPAY" }, { name: "STRIPE" }];

// const Checkout = () => {
//   const [selectedAddress, setSelectedAddress] = useState(1);
//  const [paymentGateway, setPaymentGateway] = useState(paymentGatewayList[0].name);

//  const dispatch = useAppDispatch();
// const  user  = useAppSelector((store) => store.user);
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const handleChange = (e) => {
//     console.log("e", e.target.value);

//     setSelectedAddress(e.target.value); // evide number enn koduthittund
//   };

//   const handleChangePaymentGateway = (e) => {
//   setPaymentGateway(e.target.value);
// };

//  const handleCreateOrder = () => {
//         if (user.user?.addresses)
//             dispatch(createOrder({
//                 paymentGateway,
//                 address: user.user?.addresses[value],
//                 jwt: localStorage.getItem('jwt') || ""
//             }))
//     }



//   return (
//     <Box className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen z-0">
//       <Box className="space-y-5 lg:space-y-0 lg:grid-cols-3 lg:gap-9">
//         <div className="col-span-2 space-y-5">
//           <div className="flex justify-between items-center">
//             <span className="font-semibold">Selet Delivery Address</span>
//             <Button onClick={handleOpen} variant="outlined">
//               Add New Address
//             </Button>
//           </div>
//           <div className="text-xs font-medium space-y-5">
//             <p>Saved Addresses</p>
//             <div className="space-y-3">
//               {user.user?.addresses?.map((item, index) => (
//                 <Addresscard
//                   key={item._id}
//                   handleChange={handleChange}
//                   value={index}
//                   item={item}
//                   selectedValue={value}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="py-4 px-5 rounded md border border-gray-300 ">
//             <Button onClick={handleOpen} startIcon={<AddIcon />}>
//               Add New Address
//             </Button>
//           </div>
//         </div>
//         <div className="cols-span-1 text-sm space-y-3">
//           <section className="space-y-3 border p-5 rounded-md border border-gray-400">
//             <h1 className="text-teal-600 font-medium pb-2 text-center">
//               Choose Payment Gateway{" "}
//             </h1>
//             <RadioGroup
//               row
//               aria-labelledby="demo-row-radio-buttons-group-label"
//               name="row-radio-buttons-group"
//               value={paymentGateway}
//               onChange={handleChangePaymentGateway}
//             >
//               {paymentGatewayList.map((item) => (
//                 <FormControlLabel
//                   value={item.name}
//                   control={<Radio />}
//                   label={item.name}
//                 />
//               ))}
//             </RadioGroup>
//           </section>

//           <section className="border border-gray-400 rounded-md ">
//             <PricingCard />
//             <Box className="p-5">
//               <Button variant="contained"
//                  onClick={handleCreateOrder}
//                fullWidth sx={{ py: "11px" }}>
//                 Check Out
//               </Button>
//             </Box>
//           </section>
//         </div>
//       </Box>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <AddressForm  paymentGateway={paymentGateway}/>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default Checkout;


// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   FormControlLabel,
//   Modal,
//   Radio,
//   RadioGroup,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

// import AddressForm from "./AddressForm";
// import PricingCard from "../Cart/PricingCard";
// import Addresscard from "./AddressCard"
// import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/store";
// import { createOrder } from "../../../Redux Toolkit/features/customer/orderSlice";
// // import { addUserAddress } from "../../../Redux Toolkit/features/customer/userSlice";


// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 500,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
// };

// const paymentGatewayList = [
//   { name: "RAZORPAY" },
//   { name: "STRIPE" },
// ];

// const Checkout = () => {
//   const dispatch = useAppDispatch();

//   // ✅ correct selector
//   const user = useAppSelector((store) => store.user);

//   const [selectedAddress, setSelectedAddress] = useState(0);
//   const [paymentGateway, setPaymentGateway] = useState(
//     paymentGatewayList[0].name
//   );

//   const [open, setOpen] = useState(false);
// const handleClose = () => setOpen(false);
//   const handleChangeAddress = (e) => {
//     setSelectedAddress(Number(e.target.value));
//   };

//   const handleChangePaymentGateway = (e) => {
//     setPaymentGateway(e.target.value);
//   };

//   const handleCreateOrder = () => {
//     if (!user.user?.addresses?.length) return;

//   dispatch(
//     createOrder({
//       address: user.user.addresses[selectedAddress],
//       jwt: localStorage.getItem("jwt"),
//       paymentGateway,
//     })
//   );
// };

 

//   return (
//     <Box className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
//       <Box className="space-y-5 lg:grid grid-cols-3 lg:gap-9">

//         {/* LEFT */}
//         <div className="col-span-2 space-y-5">
//           <div className="flex justify-between items-center">
//             <span className="font-semibold">Select Delivery Address</span>
//             <Button onClick={() => setOpen(true)} variant="outlined">
//               Add New Address
//             </Button>
//           </div>

//           <div className="text-xs font-medium space-y-5">
//             <p>Saved Addresses</p>

//             <div className="space-y-3">
//               {user.user?.addressess?.map((item, index) => (
//                 <Addresscard
//                   key={item._id}
//                   item={item}
//                   value={index}
//                   selectedValue={selectedAddress}
//                   handleChange={handleChangeAddress}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="py-4 px-5 rounded-md border">
//             <Button onClick={() => setOpen(true)} startIcon={<AddIcon />}>
//               Add New Address
//             </Button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="col-span-1 text-sm space-y-3">
//           <section className="space-y-3 border p-5 rounded-md">
//             <h1 className="text-teal-600 font-medium pb-2 text-center">
//               Choose Payment Gateway
//             </h1>

//             <RadioGroup
//               row
//               value={paymentGateway}
//               onChange={handleChangePaymentGateway}
//               className="flex justify-between"
//             >
//               {paymentGatewayList.map((item) => (
//                 <FormControlLabel
//                   key={item.name}
//                   value={item.name}
//                   control={<Radio />}
//                   label={item.name}
//                 />
//               ))}
//             </RadioGroup>
//           </section>

//           <section className="border rounded-md">
//             <PricingCard />
//             <Box className="p-5">
//               <Button
//                 variant="contained"
//                 fullWidth
//                 sx={{ py: "11px" }}
//                 onClick={handleCreateOrder}
//               >
//                 Checkout
//               </Button>
//             </Box>
//           </section>
//         </div>
//       </Box>

//       {/* MODAL */}
//       <Modal open={open} onClose={handleClose}>
//         <Box sx={style}>
//           <AddressForm
           
//             handleClose= {handleClose}
//           />
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default Checkout;



import React, { useState } from "react";
import PricingCard from "../Cart/PricingCard";
import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
import AddIcon from "@mui/icons-material/Add";

import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/store";
import { createOrder } from "../../../Redux Toolkit/features/customer/orderSlice";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const paymentGatwayList = [
  {
    value: "RAZORPAY",
    image:
      "https://razorpay.com/newsroom-content/uploads/2020/12/output-onlinepngtools-1-1.png",
    label: "Razorpay",
  },
  {
    value: "STRIPE",
    image: "/stripe_logo.png",
    label: "Stripe",
  },
];

const Checkout = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [paymentGateway, setPaymentGateway] = useState(
    paymentGatwayList[0].value
  );

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  // const handleCreateOrder = () => {
  //   if (user?.user?.addressess?.length) {
  //     dispatch(
  //       createOrder({
          
  //         address: user.user.addressess[value],
  //         jwt: localStorage.getItem("jwt") || "",
  //         paymentGateway
  //       })
  //     );
  //   }
  // };

  const handleCreateOrder = () => {
  const addressess = user?.user?.addressess;

  if (!addressess || !addressess[value]) return;

  dispatch(
    createOrder({
      address: addressess[value],
      jwt: localStorage.getItem("jwt") || "",
      paymentGateway,
    })
  );
};

  const handlePaymentChange = (event) => {
    setPaymentGateway(event.target.value);
  };

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
      <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
        {/* LEFT */}
        <div className="col-span-2 space-y-5">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Select Delivery Address</span>
            <Button onClick={() => setOpen(true)} variant="outlined">
              Add New Address
            </Button>
          </div>

          <div className="text-xs font-medium space-y-5">
            <p>Saved Addresses</p>
            <div className="space-y-3">
              {!open && user?.user?.addressess?.map((item, index) => (
                <AddressCard
                  key={item._id}
                  item={item}
                  value={index}
                  selectedValue={value}
                  handleChange={handleChange}
                  
                />
              ))}
            </div>
          </div>

          <div className="py-4 px-5 rounded-md border">
            <Button onClick={() => setOpen(true)} startIcon={<AddIcon />}>
              Add New Address
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-1 text-sm space-y-3">
          <section className="space-y-3 border p-5 rounded-md">
            <h1 className="text-primary-color font-medium pb-2 text-center">
              Choose Payment Gateway
            </h1>

            <RadioGroup
              row
              value={paymentGateway}
              onChange={handlePaymentChange}
              className="flex justify-between"
            >
              {paymentGatwayList.map((item) => (
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  control={<Radio />}
                  className={`border w-[45%] flex justify-center rounded-md ${
                    paymentGateway === item.value
                      ? "border-primary-color"
                      : ""
                  }`}
                  label={
                    <img
                      src={item.image}
                      alt={item.label}
                      className="object-cover"
                    />
                  }
                />
              ))}
            </RadioGroup>
          </section>

          <section className="border rounded-md">
            <PricingCard />
            <div className="p-5">
              <Button
                onClick={handleCreateOrder}
                sx={{ py: "11px" }}
                variant="contained"
                fullWidth
              >
                Checkout
              </Button>
            </div>
          </section>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <AddressForm
            // paymentGateway={paymentGateway}
            handleClose={() => setOpen(false)}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Checkout;


