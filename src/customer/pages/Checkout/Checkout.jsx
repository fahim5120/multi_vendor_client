import React, { useState } from "react";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import { Box, Modal, Typography } from "@mui/material";
import AddressForm from "./AddressForm";
import Addresscard from "./Addresscard";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState(1);
   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    console.log("e",e.target.value);
    
    setSelectedAddress(e.target.value);// evide number enn koduthittund
  }
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
      <div className="space-y-5 lg:space-y-0 lg:grid-cols-3 lg:gap-9">
        <div className="col-span-2 space-y-5">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Selet Delivery Address</span>
            <Button onClick={handleOpen} variant="outlined">Add New Address</Button>
          </div>
          <div className="text-xs font-medium space-y-5">
            <p>Saved Addresses</p>
            <div className="space-y-3">
              {[1, 2,3,4,5,6].map((item, index) => (
                <Addresscard
                  key={index}
                  handleChange={handleChange}
                  value={index}
                  selectedValue={selectedAddress}
                />
              ))}
            </div>
          </div>
          <div className="py-4 px-5 rounded md border border-gray-300 ">
            <Button onClick={handleOpen} startIcon={<AddIcon />}>Add New Address</Button>
          </div>
        </div>
      </div>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   <AddressForm/>
  </Box>
</Modal>
    </div>
  );
};

export default Checkout;
