import { Button, Divider } from "@mui/material";
import Star from "@mui/icons-material/Star";
import React, { useState } from "react";
import ShieldIcon from "@mui/icons-material/Shield";
import WorkspacePremium from "@mui/icons-material/WorkspacePremium";
import LocalShipping from "@mui/icons-material/LocalShipping";
import Wallet from "@mui/icons-material/Wallet";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import SimilarProduct from "./SimilarProduct";

const images = [
  "https://m.media-amazon.com/images/I/81jo+i4pLfL._AC_SY445_.jpg",
  "https://m.media-amazon.com/images/I/71nUIzvu5VL._AC_SY445_.jpg",
  "https://m.media-amazon.com/images/I/81FXELa76YL._AC_SY445_.jpg",
  "https://m.media-amazon.com/images/I/71mdK-QQTLL._AC_SY445_.jpg",
];


const ProductDeatails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleChangeCurrentImage = (index) => setCurrentImage(index);
  const handleQuantityChange = (value) => setQuantity(value + quantity);

  return (
    <div className="min-h-screen px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {images.map((item, index) => (
              <img
                onClick={() => handleChangeCurrentImage(index)}
                className="lg:w-full w-[50px] cursor-pointer rounded-md "
                src={item}
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              src={images[currentImage]}
              alt=""
              className="w-full rounded-md "
            />
          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-teal-500">Buyza Clothing</h1>
          <p className="text-gray-5300 font-semibold">
            Pink Floral patterned saree
          </p>
          <div className="flex justify-between items-center py-2 border border-gray-500 w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span className="">4</span>
              <Star color="primary" />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>478 Rating</span>
          </div>
          <div className="space-y-2 pt-5">
            <div className="price flex items-center gap-3">
              <span className="font-semibold text-teal-800">₹2499</span>
              <span className="text font-thin line-through text-gray-400">
                ₹3999
              </span>
              <span className="font-semibold text-teal-600">38% off</span>
            </div>
            <p className="text-sm">
              Inclusive of all taxes. Free Shipping above ₹1500.
            </p>
          </div>
          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <ShieldIcon color="primary" />
              <p>Authentic & Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium color="primary" />
              <p>100% money back guarantee</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping color="primary" />
              <p>Free Shipping & Returns</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet color="primary" />

              <p>Pay on delivery might be available</p>
            </div>
            <div className="mt-7 space-y-2 ">
              <h1>QUANTITY</h1>
              <div className="flex items-center gap-2 w-[140px] justify-between ">
                <Button
                  onClick={() => handleQuantityChange(-1)}
                  variant="outlined"
                >
                  <Remove />
                </Button>
                <span>{quantity}</span>
                <Button
                  onClick={() => handleQuantityChange(1)}
                  variant="outlined"
                >
                  <Add />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              startIcon={<AddShoppingCart />}
              variant="outlined"
              fullWidth
              sx={{ py: "1rem" }}
            >
              Add To Bag
            </Button>
            <Button
              startIcon={<Favorite />}
              fullWidth
              variant="outlined"
              sx={{ py: "1rem" }}
            >
              Whichlist
            </Button>
          </div>
          <div className="mt-5">
            <p>
              This pink saree boasts a delightful floral pattern across its
              body, lending an air of grace and femininity. The border is
              elegantly adorned with intricate floral motifs, enhancing its
              charm and sophistication. Playful tassel trims along the edges add
              a touch of whimsy and movement to the ensemble. Perfect for
              special occasions, this saree effortlessly combines traditional
              elegance with modern flair, making it a versatile and stylish
              choice for any event
            </p>
          </div>
        </section>
      </div>
      <section className="mt-20">
        <h1 className="text-lg font-bold">Similar product</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </section>
    </div>
  );
};

export default ProductDeatails;
