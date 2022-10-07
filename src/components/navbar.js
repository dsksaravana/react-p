import React from "react";
import HmeNavDrop from "./homenavdropdown";

export default function navbar() {
  const links = [
    {
      id: 1,
      name: "Mobiles & Accessories",
      link: "https://poorvika.com/s?catagories=categories%3A%3D%5B%60Mobiles+%26+Accessories%60%5D&stock_status=stock_status%3A%3D%5B%60In+Stock%60%5D",
    },
    {
      id: 2,
      name: "Computers & Tablets",
      link: "https://poorvika.com/s?catagories=categories%3A%3D%5B%60Computers+%26+Tablets%60%5D&stock_status=stock_status%3A%3D%5B%60In+Stock%60%5D",
    },
    {
      id: 3,
      name: "TV & Audio",
      link: "https://poorvika.com/s?catagories=categories%3A%3D%5B%60TV+%26+Audio%60%5D&stock_status=stock_status%3A%3D%5B%60In+Stock%60%5D",
    },
    {
      id: 4,
      name: "Kitchen Appliances",
      link: "https://poorvika.com/s?catagories=categories%3A%3D%5B%60Kitchen+Appliances%60%5D&stock_status=stock_status%3A%3D%5B%60In+Stock%60%5D",
    },
    {
      id: 5,
      name: "Home Appliances",
      link: "https://poorvika.com/s?catagories=categories%3A%3D%5B%60Home+Appliances%60%5D&stock_status=stock_status%3A%3D%5B%60In+Stock%60%5D",
    },
  ];

  return (
    <div className="sticky top-0 left-0 right-0">
      <div className="appbar">
        <div
          className="flex items-center"
          style={{ padding: "0 6px", height: "43px" }}
        >
          <div className="applogo ">
            <a>
              <div>
                <img src="https://img.poorvika.com/common/Poorvika-english-logo.svg" />
              </div>
            </a>
          </div>
          <form className="app_bar_search d-none d-md-block">
            <input
              type="text"
              className="text-black"
              placeholder="Search for Products, Brands, Offers"
            />
          </form>
        </div>
      </div>

      <div className="dropmenu">
        <div className="desktopmenu">
          {links.map((item) => (
            <div className="desktopmenu_li" key={item.id}>
              <a rel="canonical" href={item.link}>
                {item.name}
              </a>
              <HmeNavDrop />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
