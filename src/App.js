import React from "react";
import "./App.css";
import MainHeader from "./Components/Header/main-heder/main_header";
import { BasketProvider } from "./Components/BasketContext/BasketContext";
import ProductContainer from "./Components/product/product-container/product-container";

function App() {
  return (
    <div className="App">
      <BasketProvider>
        <MainHeader />
      </BasketProvider>
      <ProductContainer/>
    </div>
  );
}

export default App;
