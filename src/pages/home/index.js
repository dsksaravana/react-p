import React from "react";
import NavBar from "../../components/navbar";
import BrandSlider from "../../components/brandslider";
import FSB from "../../components/fullsizebanner";
import MainSlider from "./mainslider";
import PLWBN from "./product_list_wth_side_banner";
import ProductList from "../../components/product_list";
import Footer from "../../components/footer";

export default function index() {
  return (
    <div className="pagebody">
      <NavBar />
      <MainSlider />
      <PLWBN showleft={true} />
      <PLWBN showleft={false} />
      <FSB />
      <PLWBN showleft={true} />
      <PLWBN showleft={false} />
      <BrandSlider />
      <ProductList />
      <Footer />
    </div>
  );
}
