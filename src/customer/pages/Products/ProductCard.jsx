// import React, { useEffect, useState } from 'react'
// import "./ProductCard.css"
// import { useNavigate } from 'react-router'



// const ProductCard = ({ item }) => {
//   const [currentImage, setCurrentImage] = useState(0)
//   const [isHovered, setIsHovered] = useState(false)
//   const navigate=useNavigate()

//   useEffect(() => {
//     let interval
//     if (isHovered) {
//       interval = setInterval(() => setCurrentImage((prev) => (prev + 1) % item.images.length), 1000)
//     } else if (interval) {
//       clearInterval(interval)
//     }
//     return () => clearInterval(interval)
//   }, [isHovered, item.images.length])
//   return (
//     <div onClick={()=>navigate(`/product-details/${1}/${"man shirt"}/${2}`)} className='group px-4 relative'>
//       <div onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className='z-10 relative w-[250px] sm:[w-full] h-[350px] overflow-hidden'>

//         {item.images.map((image, index) =>
//           <img
//             src={image}
//             className='card-media object-top'
//             key={index}
//             style={{ transform: `translateX(${(index - currentImage) * 100}%)` }} />

//         )}
//       </div>
//       <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>

//         <div className='name space-y'>
//           <h1 className='font-semibold text-lg'>
//             {item.seller.bussinessDetails.bussinessName}
//           </h1>
//           <p>
//             Pink Flora patterrned saree
//           </p>
//         </div>
//         <div className='price flex items-center gap-3'>
// <span className='font-semibold text-teal-800'>
//   ₹{item.sellingPrice}
// </span>
// <span className='text font-thin line-through text-gray-400' >
//   ₹{item.mrpPrice}
// </span>
// <span className='font-semibold text-teal-600'>
//   {item.discountPercent}% off
// </span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductCard

import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../Redux Toolkit/store'
import { addItemToCart } from '../../../Redux Toolkit/features/customer/cartSlice'


const ProductCard = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
const navigate=useNavigate()
const dispatch=useAppDispatch()
  const images = item?.images || []   // ✅ safety

  useEffect(() => {
    let interval
    if (isHovered && images.length > 1) {
      interval = setInterval(
        () => setCurrentImage((prev) => (prev + 1) % images.length),
        1000
      )
    }
    return () => clearInterval(interval)
  }, [isHovered, images.length])



  return (
    <div
      onClick={() =>
        navigate(`/product-details/${item.category?.categoryId}/${item.title}/${item._id}`)
          // navigate(`/product-details/${item._id}/${item.title}/${item.categoryId}`)
      }
      className='group px-4 relative'
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='z-1 relative w-[250px] sm:[w-full] h-[350px] overflow-hidden'
      >
        {images.length > 0 &&
          images.map((image, index) => (
            <img
              src={image}
              className='card-media object-top'
              key={index}
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`
              }}
            />
          ))
        }
      </div>

      <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
        <div className='name space-y'>
          <h1 className='font-semibold text-lg'>
            {item?.seller?.bussinessDetails?.bussinessName || "Seller"}
          </h1>
          <p>
            {item?.title}
          </p>
        </div>

        <div className='price flex items-center gap-3'>
          <span className='font-semibold text-teal-800'>
            ₹{item?.sellingPrice}
          </span>
          <span className='text font-thin line-through text-gray-400'>
            ₹{item?.mrpPrice}
          </span>
          <span className='font-semibold text-teal-600'>
            {item?.discountPercent}% off
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard



