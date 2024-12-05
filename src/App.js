import React from "react";
import "./App.css";
import MainHeader from "./Components/Header/main-heder/main_header";
import { BasketProvider } from "./Components/BasketContext/BasketContext";

function App() {
  return (
    <div className="App">
      <BasketProvider>
        <MainHeader />
      </BasketProvider>
    </div>
  );
}

export default App;
