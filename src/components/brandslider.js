import React from "react";
import Slider from "react-slick";

export default function brandslider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 15,
    slidesToScroll: 10,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const numbers = [
    "James",
    "Paul",
    "John",
    "George",
    "Ringo",
    "James1",
    "Paul2",
    "John3",
    "George4",
    "Ringo5",
    "James2",
    "Paul2",
    "John2",
    "George2",
    "Ringo2",
    "James3",
    "Paul3",
    "John4",
    "George5",
    "Ringo6",
  ];

  return (
    <div className="homebrandslider">
      <Slider {...settings}>
        {numbers.map((numbers, index) => (
          <BrandLogo key={index} />
        ))}
      </Slider>
    </div>
  );
}

const BrandLogo = () => {
  return (
    <div>
      <img src="https://img.poorvika.com/HomePage-Banner/Brand-Logo/Havells.png" />
    </div>
  );
};
