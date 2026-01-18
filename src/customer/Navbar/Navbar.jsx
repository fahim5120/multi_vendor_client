import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery, Button } from "@mui/material";
import { mainCategory } from "../../data/category/mainCategory";
import CategorySheet from "./CategorySheet";
import Search from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Storefront from "@mui/icons-material/Storefront";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../Redux Toolkit/store";

const Navbar = () => {
  const user = useAppSelector((store) => store.user);
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const [showSheet, setShowSheet] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("men");

  const navigate = useNavigate();

  return (
    <Box className="sticky top-0 left-0 right-0 bg-white z-50">
      {/* NAVBAR */}
      <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b border-gray-300">
        <div className="flex items-center gap-9">
          <div className="flex items-center gap-2">
            {!isLarge && (
              <IconButton>
                <MenuIcon sx={{ fontSize: 29 }} />
              </IconButton>
            )}
            <h1
              onClick={() => navigate("/")}
              className="logo text-lg md:text-2xl cursor-pointer"
            >
              Buyza
            </h1>
          </div>

          {/* MAIN CATEGORY */}
          <ul className="flex items-center font-medium text-gray-800">
            {mainCategory.map((item) => (
              <li
                key={item.categoryid}
                onMouseEnter={() => {
                  if (isLarge) {
                    setSelectedCategory(item.categoryid);
                    setShowSheet(true);
                  }
                }}
                onMouseLeave={() => {
                  if (isLarge) setShowSheet(false);
                }}
                onClick={() => {
                  // 📱 MOBILE CLICK
                  if (!isLarge) {
                    setSelectedCategory(item.categoryid);
                    setShowSheet(true);
                  }
                }}
                className="cursor-pointer hover:text-[#00927c] h-[70px] px-4 flex items-center"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          <IconButton>
            <Search sx={{ fontSize: 29 }} />
          </IconButton>

          {user.user?.fullName ? (
            <Button
              className="flex items-center gap-2"
              onClick={() => navigate("/account")}
            >
              <Avatar sx={{ width: 29, height: 29 }} />
              <span>{user.user.fullName}</span>
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              variant="contained"
              startIcon={<AccountCircle />}
            >
              Login
            </Button>
          )}

          <IconButton>
            <FavoriteBorder sx={{ fontSize: 29 }} />
          </IconButton>

          <IconButton onClick={() => navigate("/cart")}>
            <AddShoppingCart sx={{ fontSize: 29 }} />
          </IconButton>

          {isLarge && (
            <Button
              onClick={() => navigate("/become-seller")}
              variant="contained"
              startIcon={<Storefront />}
            >
              Become Seller
            </Button>
          )}
        </div>
      </div>

      {/* CATEGORY SHEET – DESKTOP + MOBILE */}
      {showSheet && (
        <div
          className={`
            fixed lg:absolute
            top-[70px] left-0 right-0
            bottom-0 lg:bottom-auto
            bg-white z-50
            overflow-auto
          `}
          onMouseEnter={() => isLarge && setShowSheet(true)}
          onMouseLeave={() => isLarge && setShowSheet(false)}
        >
          {/* Mobile close button */}
          {!isLarge && (
            <button
              className="px-5 py-3 text-sm text-gray-600"
              onClick={() => setShowSheet(false)}
            >
              ← Back
            </button>
          )}

          <CategorySheet
            selectedCategory={selectedCategory}
            setShowSheet={setShowSheet}
          />
        </div>
      )}
    </Box>
  );
};

export default Navbar;




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

