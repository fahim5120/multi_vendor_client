import React from 'react'
import { useNavigate } from 'react-router';

const DealCard = ({deal}) => {
  const navigate = useNavigate();
  console.log(deal,'deal in deal card');
  return (
    <div   onClick={() => navigate(`/products/${deal.category.categoryId}`)}  className='w-full cursor-pointer'>
<img className="border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top " src={deal.category.image} alt="" />
<div className='border-4 border-black bg-black text-white p-2 text-center'>
    <p className='text-2xl font-bold'>{deal.discount} %</p>
    <p className='font-bold-balance font-bold'>shop now</p>
</div>
    </div>
  )
}

export default DealCard