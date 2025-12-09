import { ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button'
import customeTheme from './Theme/customTheme';
import Home from './customer/pages/Home/Home';
import Products from './customer/pages/Products/Products';
import Footer from './customer/Footer/Footer';
import ProductDeatails from './customer/pages/Products/ProductDetails/ProductDeatails';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Navbar from './customer/Navbar/Navbar';
import Profile from './customer/pages/Order/Profile';




function App() {
  return (
    <div>

     <ThemeProvider theme={customeTheme}>
     <Navbar/>

     {/* <Home/> */}
     {/* <Products/> */}
     {/* <ProductDeatails/> */}
     {/* <Cart/> */}
     {/* <Checkout/> */}
     <Profile/>
     <Footer/>
     </ThemeProvider>

    </div>
  );
}

export default App;
