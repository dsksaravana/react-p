import React from "react";
import Slider from "react-slick";

export default function mainslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true
  };

  const images = [
    {
      id: 1,
      src: "https://img.poorvika.com/cdn-cgi/image/width=1900,height=600,quality=75/HomePage-Banner/Main-Banner/Deals/may/Festival-Deals-Offer-at-poorvika-4.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://img.poorvika.com/cdn-cgi/image/width=1900,height=600,quality=75/HomePage-Banner/Main-Banner/Samsung/September/Samsung-Galaxy-Z-Flip4-Available-at-Poorvika-1.jpg",
      alt: "Image 2 ",
    },
    {
      id: 3,
      src: "https://img.poorvika.com/cdn-cgi/image/width=1900,height=600,quality=75/HomePage-Banner/Main-Banner/Samsung/September/samsung-Appliance-offer-at-poorvika.jpg",
      alt: "Image 3",
    },
  ];

  return (
    <Slider {...settings}>
      {images.map((item) => (
        <div key={item.id}>
          <img className="banner_image_responsive" src={item.src} alt={item.alt} />
        </div>
      ))}
    </Slider>
  );
}
