import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import customeTheme from "./Theme/customTheme";
import Home from "./customer/pages/Home/Home";
import Products from "./customer/pages/Products/Products";
import Footer from "./customer/Footer/Footer";
import ProductDeatails from "./customer/pages/Products/ProductDetails/ProductDeatails";
import Cart from "./customer/pages/Cart/Cart";
import Checkout from "./customer/pages/Checkout/Checkout";
import Navbar from "./customer/Navbar/Navbar";
import Profile from "./customer/pages/Order/Profile";
import { Route, Routes } from "react-router";
import SellerDashboard from "./seller/SellerDashboard/SellerDashboard";
import BecomeSeller from "./Auth/Become Seller/BecomeSeller";
import CustomerRoutes from "./routes/CustomerRoutes";
import Auth from "./Auth/Login/Auth";

function App() {
  return (
    <div>
      <ThemeProvider theme={customeTheme}>


      
        {/* <Home/> */}
        {/* <Products/> */}
        {/* <ProductDeatails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Profile /> */}




{/* sellerRoutes */}
<Routes>
   <Route path="/become-seller" element={<BecomeSeller/>}/>
  <Route path="/seller/*" element={<SellerDashboard/>}/>
   <Route path="/login/" element={<Auth/>}/>
   <Route path="/*" element={<CustomerRoutes/>}/>
</Routes>

{/* <SellerDashboard/> */}







{/* customer Routes */}
  {/* <Navbar /> */}
        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:categoryId" element={<Products />}>
          </Route>
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDeatails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout/address" element={<Checkout />}></Route>
          <Route path="/account/*" element={<Profile />}></Route>
        </Routes> */}

        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
