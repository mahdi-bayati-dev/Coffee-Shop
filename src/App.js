import React from "react";
import "./App.css";
import MainHeader from "./Components/Header/main-heder/main_header";
import { BasketProvider } from "./Components/BasketContext/BasketContext";
import ProductContainer from "./Components/product/product-container/product-container";
import CategoryBanner from "./Components/Categor-Banner/CategoryBanners";
import { Categories } from "./data-CategoryBanner";
import ProductsCategoryContainer from "./Components/ProductsCategory/ProductsCategoryContainer";
import BestSeller from "./Components/bestSeller/bestSeller";
import CoffeeClub from "./Components/CoffeeClub/CoffeeClub";
import ArticleContainer from "./Components/Article/ArticleContainer/ArticleContainer";
import ContactUs from "./Components/ContactUs/ContactUs"

function App() {
  return (
    <div className="App">
      <BasketProvider>
        <MainHeader />
      </BasketProvider>
      <ProductContainer />
      <div className="container flex flex-col lg:flex-row gap-4 mt-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {Categories.map((category) => (
          <CategoryBanner id={category.id} {...category} />
        ))}
      </div>
      <ProductsCategoryContainer />
      <BestSeller/>
      <CoffeeClub/>
      <ArticleContainer/>
      <ContactUs/>


    </div>
  );
}

export default App;
