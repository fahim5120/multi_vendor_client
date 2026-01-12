import React from "react";
import DealCard from "./DealCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector } from "../../../../Redux Toolkit/store";

const Deal = () => {
  const { homePage } = useAppSelector((store) => store);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="py-5 lg:px-20">
      <div className="slide-container">
        <Slider {...settings}>
          {homePage.homePageData?.deals?.map((item, index) => (
            <div key={index} className="flex flex-col w-60">
              <DealCard deal={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Deal;
