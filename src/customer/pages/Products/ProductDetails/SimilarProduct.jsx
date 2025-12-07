import React from 'react'
import ProductCard from '../ProductCard'

const SimilarProduct = () => {
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
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between gap-2 gap-y-8'>
{[1,1,1,1,1,1,1].map((item,index)=><ProductCard  key={index} item={product[0]}/>)}
    </div>
  )
}

export default SimilarProduct