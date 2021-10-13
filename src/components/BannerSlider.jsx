import React from 'react';
import { SliderData } from '../assets/SliderData';
import Slider from 'react-slick';

const BannerSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  return (
    <>
      <Slider {...settings} className="banner">
        {SliderData.map((slide, index) => (
          <div className="slider">
            <img src={slide.image} alt="" key={index} className="slider-image" />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default BannerSlider;
