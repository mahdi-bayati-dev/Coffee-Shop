import React from "react";
import NavBarHeader from "../NavBar-heder/Nav_header";

function MainHeader() {
  return (
    <>
      <NavBarHeader />
      <header
        className="bg-cover bg-center w-full min-h-screen relative bg-no-repeat  -z-10"
        style={{
          backgroundImage: "url('./img/header-bg/headerBgDesktop.png')",
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="absolute left-4 md:left-20 lg:left-36 top-4 md:top-32 lg:top-40">
            <div className="text-white flex flex-col gap-y-5 md:gap-y-7 lg:gap-y-10 w-48 md:w-80 lg:w-[462px]">
              <div className="text-right">
                <h1 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[50px] font-Morabba-Bold text-shadow-lg">
                  قهوه عربیکا تانزانیا
                </h1>
                <span className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-3xl font-Morabba-Light text-shadow-lg">
                  یک فنجان بالانس !
                </span>
              </div>
              <span className="border border-b-2 border-orange-300 w-20 sm:w-24 md:w-24 lg:w-28 text-shadow-sm"></span>
              <div>
                <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-xl text-shadow-lg text-right">
                  قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه
                  است که در نواحی مختلف کمربند قهوه کشت میشود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainHeader;
