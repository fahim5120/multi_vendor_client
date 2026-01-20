import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import ProductCard from "./ProductCard";
import { useParams, useSearchParams } from "react-router";
import {
  store,
  useAppDispatch,
  useAppSelector,
} from "../../../Redux Toolkit/store";
import { getAllProducts } from "../../../Redux Toolkit/features/customer/productSlice";

const Products = () => {
  const [sort, setSort] = useState("price_lower");
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((store) => store.product);

  console.log("categoryId", categoryId, product);

  const handleSortProduct = (e) => {
    setSort(e.target.value);
  };

  //     useEffect=(
  //         ()=>{
  // dispatch(getAllProducts({}))
  //         },[]
  //     )

  // useEffect(() => {
  //   dispatch(getAllProducts({}));
  // }, [dispatch]);
  useEffect(() => {
    dispatch(
      getAllProducts({
        category: categoryId, // ✅ VERY IMPORTANT
      })
    );
  }, [dispatch, categoryId]);

  return (
    <div className="mt-10">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2">
       {product.products?.[0]?.category?.name}
        </h1>
      </div>

      <div className="lg:flex">
        {/* Left Filter */}
        <section className="hidden lg:block  w-[20%] min-h-screen border-gray-300">
          <FilterSection />
        </section>

        {/* Products Right Side */}
        <section className="w-full lg:w-[80%] space-y-5">
          {/* Product Cards map here later */}
          <div className=""></div>

          <div className="flex justify-between item-center px-9 h-[40px]">
            <div></div>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="sort"
                id="sort"
                value={sort}
                label="Sort"
                onChange={handleSortProduct}
              >
                <MenuItem value={"price_lower"}>Price : Low - High</MenuItem>
                <MenuItem value={"price_high"}>Price : High - Low</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Divider />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center mt-5">
            {product?.products?.map((item, index) => (
              <div key={index * 3}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
            <Pagination count={product.totalPages} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
