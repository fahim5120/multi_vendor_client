import React from 'react'
import { useAppSelector } from '../../../../Redux Toolkit/store'

const Grid = () => {
     const category=useAppSelector(store=>store.homeCategory.homeCategories?.grid)


       if (!Array.isArray(category) || category.length < 6) {
    return null; // or loading UI
  }
  console.log("grid" ,category);
  
    return (
        <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>

            <div className='col-span-3 row-span-12 text-white rounded-md'>
                <img className="object-cover h-full w-full rounded-md" src={category[0].image} alt="" />
            </div>

            <div className='col-span-2 row-span-6 text-white rounded-md'>
                <img className="object-cover h-full w-full rounded-md" src={category[5].image} alt="" />
            </div>

            <div className='col-span-4 row-span-6 text-white rounded-md'>
                <img className="object-cover h-full w-full rounded-md" src={category[9].image} alt="" />
            </div>

            <div className='col-span-3 row-span-12 text-white rounded-md'>
                <img className="object-cover h-full w-full rounded-md" src={category[6].image} alt="" />
            </div>

            <div className='col-span-4 row-span-6 text-white rounded-md'>
                <img className="object-cover h-full w-full rounded-md" src={category[5].image} alt="" />
            </div>

            <div className='col-span-2 row-span-6 text-white rounded-md'>
                <img className="object-cover h-full w-full rounded-md" src={category[6].image} alt="" />
            </div>

        </div>
    )
}

export default Grid