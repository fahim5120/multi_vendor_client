import { Avatar, Button, Divider } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import ProfileFildCard from "../../customer/pages/Account/ProfileFildCard";
import { useAppSelector } from "../../Redux Toolkit/store";

const SellerProfile = () => {
  const seller=useAppSelector(store=>store.seller)
  return (
    <div className="lg:px-20 pt-5 pb-20 space-y-20">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="font-bold text-xl">Seller Details</h1>
          <div>
            <Button className="w-16 h-16">
              <EditIcon />
            </Button>
          </div>
        </div>

        <div>
          <Avatar
            sx={{ width: "10rem", height: "10rem" }}
            src="https://t3.ftcdn.net/jpg/06/11/89/50/360_F_611895025_3sEm547mzOF1IKMBAVa4fJ7Ifq4z8Eye.jpg"
          />

          <div>
            <ProfileFildCard keys={"Seller Name"} value={seller.profile?.sellerName} />
            <Divider/>
             <ProfileFildCard keys={"Seller Email"} value={seller.profile?.email} />
               <Divider/>
              <ProfileFildCard keys={"Seller Mobile"} value={seller.profile?.mobile || "dummy mobile"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
