import React from "react";
import Home from "../components/MainPage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Annocument from "../components/annocument/Annocument";
import Wrapper from "../components/wrapper/Wrapper";
import Art from "../components/shopBy/ShopByArt";
import Material from "../components/shopBy/ShopByMaterial";
import Arrivals from "../components/shopBy/NewCollection";

const Pages = ({ productItems, addToCart, CartItem, shopItems, Ndata }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <Arrivals Ndata={Ndata} addToCart={addToCart} />
      <NewArrivals addToCart={addToCart} />
      <Art />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <Material />
      <Annocument />
      <Wrapper />
    </>
  );
};

export default Pages;
