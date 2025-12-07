import React from 'react'
import DealCard from './DealCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Deal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:"linear"
  };
  return (
    <div className='py-5 lg:px-20'>
      <div className='slide-container'>   
        <Slider {...settings}>
          {[1, 1, 1, 1,1,1].map((item, index) => (
            <div key={index} className="flex flex-col w-60">
              <DealCard
                deal={{
                  image:
                    "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc041fffc/images/Sonata/Catalog/SP80062KM01W_1.jpg?sw=600&sh=600",
                  discount: "10",
                }}
              />
            </div>
          ))}
        </Slider>


      </div>
 

    </div>
  )
}

export default Deal