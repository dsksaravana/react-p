import React, { useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

export default function Mainslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const [images, setData] = React.useState([]);

  useEffect(() => {
    axios.get("//127.0.0.1:8888/tasks/").then((res) => {
      setData(res.data);
      console.log(res);
    }).catch((error) => {
      // Error
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the 
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
      }
      console.log(error.config);
  });
  });

  return (
    <Slider {...settings}>
      {images.map((item) => (
        <div key={item._id}>
          <img
            className="banner_image_responsive"
            src={item.name}
            //alt={item.alt}
          />
        </div>
      ))}
    </Slider>
  );
}
