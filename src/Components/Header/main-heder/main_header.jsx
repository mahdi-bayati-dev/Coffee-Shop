import React from "react";
import NavBarHeader from "../NavBar-heder/Nav_header";

function MainHeader() {
  return (
    <header
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('img/header-bg/headerBgDesktop.png')",
      }}
    >
      <NavBarHeader />
    </header>
  );
}

export default MainHeader;
