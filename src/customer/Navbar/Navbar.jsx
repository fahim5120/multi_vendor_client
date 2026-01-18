// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useTheme, useMediaQuery, Button } from "@mui/material";
// import { mainCategory } from "../../data/category/mainCategory";
// import CategorySheet from "./CategorySheet";
// import Search from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
// import Storefront from "@mui/icons-material/Storefront";
// import Avatar from "@mui/material/Avatar";
// import {useNavigate } from "react-router";
// import { useAppSelector } from "../../Redux Toolkit/store";

// const Navbar = () => {
//    const  user = useAppSelector((store) => store.user);
//   const theme = useTheme();
//   const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
//   const [showSheet, setShowSheet] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("men");
//   const navigate=useNavigate()

//   return (
//     <Box className="sticky top-0 left-0 right-0 bg-white blur-bg bg-opacity-80">
//       <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b border-gray-300">
//         <div className="flex items-center gap-9 ">
//           <div className="flex items-center gap-2">
//             {!isLarge && (
//               <IconButton>
//                 <MenuIcon className="text-gray-700" sx={{ fontSize: 29 }} />
//               </IconButton>
//             )}
//             <h1 onClick={()=>navigate("/")} className="logo text-lg md:text-2xl cursor-pointer ">Buyza</h1>
//           </div>


//           <ul className="flex items-center font-medium text-gray-800 ">
//             {mainCategory.map((item) => (
//               <li
//                 onMouseLeave={() => {
//                   setShowSheet(false);
//                 }}
//                 onMouseEnter={() => {
//                   setShowSheet(true);
//                   setSelectedCategory(item.categoryid);
//                 }}
//                 key={item.categoryid}
//                 className="mainCategory hover:text-[#00927c] cursor-pointer hover:border-b-2 h-[70px] px-4 border-[#00927c] flex items-center "
//               >
//                 {item.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="flex items-center gap-5">
//           <IconButton>
//             <Search sx={{ fontSize: 29 }} />
//           </IconButton>
//           { user.user?.fullName ?(
//             <Button  className="flex items-center gap-2" onClick={()=>navigate("/account")}>
//               <Avatar src="https://images.stockcake.com/public/2/5/b/25b212d6-d108-450a-b6d1-d497cbe9d1e2_large/handsome-man-portrait-stockcake.jpg" sx={{width:29,height:29}}/>
//               <h1>{user.user?.fullName}</h1>
//             </Button>
//           ) : (
//             <Button onClick={()=>navigate("/login")} variant="contained" startIcon={<AccountCircle />}>
//               Login
//             </Button>
//           )}
//           <IconButton>
//             <FavoriteBorder sx={{ fontSize: 29 }} />
//           </IconButton>
//           <IconButton onClick={()=>navigate("/cart")}>
//             <AddShoppingCart sx={{ fontSize: 29 }} />
//           </IconButton>
//           <Button onClick={()=>navigate("/become-seller")} variant="contained" startIcon={<Storefront />}>
//             Become Seller
//           </Button>
//         </div>
//       </div>
//       {showSheet && (
//         <div
//           onMouseLeave={() => setShowSheet(false)}
//           onMouseEnter={() => setShowSheet(true)}
//           className="categorySheet absolute top-[4.4rem] left-20 right-20"
//         >
//           <CategorySheet
//             selectedCategory={selectedCategory}
//             setShowSheet={setShowSheet}
//           />
//         </div>
//       )}
//     </Box>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import {
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Storefront from "@mui/icons-material/Storefront";
import { mainCategory } from "../../data/category/mainCategory";
import CategorySheet from "./CategorySheet";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../Redux Toolkit/store";

const Navbar = () => {
  const user = useAppSelector((store) => store.user);
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const [showSheet, setShowSheet] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <Box className="sticky top-0 z-50 bg-white border-b">
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-4 lg:px-20 h-[70px]">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {!isLarge && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <h1
            onClick={() => navigate("/")}
            className="logo text-xl font-bold cursor-pointer"
          >
            Buyza
          </h1>

          {/* DESKTOP CATEGORY */}
          {isLarge && (
            <ul className="flex items-center gap-6 ml-10">
              {mainCategory.map((item) => (
                <li
                  key={item.categoryid}
                  onMouseEnter={() => {
                    setShowSheet(true);
                    setSelectedCategory(item.categoryid);
                  }}
                  onMouseLeave={() => setShowSheet(false)}
                  className="cursor-pointer hover:text-[#00927c] h-[70px] flex items-center"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 lg:gap-4">
          <IconButton>
            <Search />
          </IconButton>

          {isLarge &&
            (user.user?.fullName ? (
              <Button onClick={() => navigate("/account")} className="gap-2">
                <Avatar sx={{ width: 28, height: 28 }} />
                {user.user.fullName}
              </Button>
            ) : (
              <Button
                variant="contained"
                startIcon={<AccountCircle />}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            ))}

          <IconButton>
            <FavoriteBorder />
          </IconButton>

          <IconButton onClick={() => navigate("/cart")}>
            <AddShoppingCart />
          </IconButton>

          {isLarge && (
            <Button
              variant="contained"
              startIcon={<Storefront />}
              onClick={() => navigate("/become-seller")}
            >
              Become Seller
            </Button>
          )}
        </div>
      </div>

      {/* DESKTOP CATEGORY SHEET */}
      {isLarge && showSheet && (
        <div
          onMouseEnter={() => setShowSheet(true)}
          onMouseLeave={() => setShowSheet(false)}
          className="absolute left-20 right-20 top-[70px] bg-white shadow-lg"
        >
          <CategorySheet
            selectedCategory={selectedCategory}
            setShowSheet={setShowSheet}
          />
        </div>
      )}

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 260 }}>
          <List>
            {mainCategory.map((item) => (
              <ListItem
                button
                key={item.categoryid}
                onClick={() => {
                  navigate(`/category/${item.categoryid}`);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>

          <Box className="px-4 mt-4 flex flex-col gap-3">
            {!user.user?.fullName && (
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            )}
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate("/become-seller")}
            >
              Become Seller
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;

