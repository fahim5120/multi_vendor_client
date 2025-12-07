


import React, { useState } from 'react'
import FilterSection from './FilterSection'
import { Divider, FormControl, InputLabel, MenuItem, Pagination, Select } from '@mui/material'
import ProductCard from './ProductCard'


const product = [
    {
        images: ["https://m.media-amazon.com/images/I/81jo+i4pLfL._AC_SY445_.jpg",
            "https://m.media-amazon.com/images/I/71nUIzvu5VL._AC_SY445_.jpg",
            "https://m.media-amazon.com/images/I/81FXELa76YL._AC_SY445_.jpg",
            "https://m.media-amazon.com/images/I/71mdK-QQTLL._AC_SY445_.jpg"

        ]
        , seller: {
            bussinessDetails: {
                bussinessName: "Nesi Clothing"
            }
        }
    }
]
const Products = () => {
    const [sort, setSort] = useState("price_lower")

    const handleSortProduct = (e) => {
        setSort(e.target.value)
    }
    return (
        <div className='mt-10'>

            {/* Page Title */}
            <div>
                <h1 className='text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2'>
                    Women Sarees
                </h1>
            </div>

            <div className='lg:flex'>

                {/* Left Filter */}
                <section className=' lg:block hidden lg:block  w-[20%] min-h-screen border-gray-300'>
                    <FilterSection />
                </section>

                {/* Products Right Side */}
                <section className='w-full lg:w-[80%] space-y-5'>
                    {/* Product Cards map here later */}
                    <div className=''>

                    </div>

                    <div className='flex justify-between item-center px-9 h-[40px]'>
                        <div>

                        </div>
                        <FormControl >
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

                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center mt-5'>
                        {[1, 1, 1, 1, 1].map((item, index) =>
                            <div key={index * 3}>
                                <ProductCard item={product[0]} />
                            </div>)}
                    </div>
<div className='flex flex-col items-center justify-center'>
    <Pagination count={10} />
</div>
                </section>

            </div>
        </div>
    )
}

export default Products
