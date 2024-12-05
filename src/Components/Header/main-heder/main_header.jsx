import React from "react";
import NavBarHeader from "../NavBar-heder/Nav_header";

function MainHeader() {
  return (
    <header
      className="bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: "url('img/header-bg/headerBgDesktop.png')",
      }}
    >
      <NavBarHeader />
      <div className=" absolute left-36 top-40">
        <div className="text-white flex flex-col gap-y-10 w-[462px]">
          <div>
            <h1 className="text-[60px] font-Morabba-Bold text-shadow-lg">قهوه عربیکا تانزانیا</h1>
            <span className="font-Morabba-Light text-5xl text-shadow-lg">یک فنجان بالانس !</span>
          </div>
          <span className="border border-b-2 border-orange-300 w-28 text-shadow-sm rounded-lg"></span>
          <div>
            <p className="text-2xl text-shadow-lg text-right">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
