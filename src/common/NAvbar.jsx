import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";

const Navbar = ({ DrawerList }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="h-[10vh] flex items-center px-5 border-b border-gray-400">
      <div className="flex items-center gap-3">
        <IconButton onClick={toggleDrawer(true)} color="primary">
          <MenuIcon color="primary" />
        </IconButton>
        <h1
          onClick={() => navigate("/")}
          className="logo text-xl cursor-pointer"
        >
          Buyza
        </h1>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default Navbar;
