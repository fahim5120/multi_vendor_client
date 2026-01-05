import HomeIcon from "@mui/icons-material/Home";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import DashboardIcon from "@mui/icons-material/Dashboard";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBox from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider } from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CategoryIcon from "@mui/icons-material/Category";
import { store, useAppSelector } from "../../Redux Toolkit/store";

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <DashboardIcon className="text-primary-color" />,
    activeIcon: <DashboardIcon className="text-white" />,
  },
  {
    name: "Coupons",
    path: "/admin/coupon",
    icon: <IntegrationInstructionsIcon className="text-primary-color" />,
    activeIcon: <IntegrationInstructionsIcon className="text-white" />,
  },
  {
    name: "Add New Coupon",
    path: "/admin/add-coupon",
    icon: <AddIcon className="text-primary-color" />,
    activeIcon: <AddIcon className="text-white" />,
  },
  {
    name: "Home Page",
    path: "/admin/home-grid",
    icon: <HomeIcon className="text-primary-color" />,
    activeIcon: <HomeIcon className="text-white" />,
  },
  {
    name: "Electronics Category",
    path: "/admin/electronics-category",
    icon: <ElectricBoltIcon className="text-primary-color" />,
    activeIcon: <ElectricBoltIcon className="text-white" />,
  },
  {
    name: "Shop By Category",
    path: "/admin/shop-by-category",
    icon: <CategoryIcon className="text-primary-color" />,
    activeIcon: <CategoryIcon className="text-white" />,
  },
  {
    name: "Deals",
    path: "/admin/deals",
    icon: <LocalOfferIcon className="text-primary-color" />,
    activeIcon: <LocalOfferIcon className="text-white" />,
  },
];

const menu2 = [
  {
    name: "Logout",
    path: "/",
    icon: <LogoutIcon className="text-primary-color" />,
    activeIcon: <LogoutIcon className="text-white" />,
  },
];

const AdminDrawerList = ({ toggleDrawer }) => {
  const { user  }= useAppSelector((store) => store.user);
  const location = useLocation();
  console.log("user....",user);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("handle Logout");
  };

  const handleClick = (item) => {
    if (item.name === "Logout") {
      handleLogout();
    }
    navigate(item.path);
    //    if(toggleDrawer) toggleDrawer(false)
  };
  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r border-gray-300 py-5">
        <div className="space-y-2">
          {menu.map((item, index) => (
            <div
              onClick={() => handleClick(item)}
              key={item.path}
              className="pr-9 cursor-pointer"
            >
              <p
                className={`${
                  location.pathname === item.path ? "bg-[teal] text-white" : ""
                }  flex items-center px-5 py-3 rounded-r-full`}
              >
                <ListItemIcon color="white">
                  {location.pathname === item.path
                    ? item.activeIcon
                    : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
         
          <Divider />
          {menu2.map((item, index) => (
            <div
              onClick={() => handleClick(item)}
              key={item.path}
              className="pr-9 cursor-pointer"
            >
              <p
                className={`${
                  location.pathname === item.path ? "bg-[teal] text-white" : ""
                }  flex items-center px-5 py-3 rounded-r-full`}
              >
                <ListItemIcon color="white">
                  {location.pathname === item.path
                    ? item.activeIcon
                    : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
                 <Divider />
         
          {user?.fullName}
         
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDrawerList;
