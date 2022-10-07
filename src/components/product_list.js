import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./product_card";

export default class product_list extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      lazyLoad: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <div className="homehead">
          <h4 className="headtitle">5G Mobile Phones</h4>
          <div style={{ flex: 1 }}></div>
          <div>
            <a className="btn_show_all" href="#">
              See all
            </a>
            <button
              className="btn_right"
              aria-label="right"
              onClick={this.previous}
            >
              {"<"}
            </button>
            <button className="btn_left" aria-label="left" onClick={this.next}>
              {">"}
            </button>
          </div>
        </div>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
    );
  }
}
