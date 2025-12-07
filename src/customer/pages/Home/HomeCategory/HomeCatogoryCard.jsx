import React from 'react'

const HomeCatogoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
 
<div className='custom-border w-[150px] lg:w-[249px] h-[150px] lg:h-[249px] rounded-full bg-teal-400'>
    <img className='group-hover:scale-95 transition-transform transform duration-700 object-cover object-top h-full w-full rounded-full'ss src={"https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/64ec2844a5674215dbecbc80/61acyx9devl-800x800.jpg"} alt="" />
    <h1 className='font-medium '>{"Lamps & Lighting"}</h1>
</div>
    </div>
  )
}

export default HomeCatogoryCard