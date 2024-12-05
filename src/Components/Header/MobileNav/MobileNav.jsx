import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import { useBasket } from "../../BasketContext/BasketContext";
import MobileBasket from "../../Basket/mobileBasket";
import { IoCloseOutline } from "react-icons/io5";
import {
  HiBars3,
  HiOutlineShoppingCart,
  HiOutlineHome,
  HiOutlineBriefcase,
} from "react-icons/hi2";
import { LiaSmsSolid } from "react-icons/lia";
import { LuPhoneOutgoing } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { CiLogin, CiLight } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

export const MobileNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuShopOpen, setIsMenuShopOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeMenu, setActiveMenu] = useState("");
  const iconSize = "w-[20px] h-[20px] cursor-pointer"; // برای اندازه آیکون‌ها

  const { toggleBasket } = useBasket();

  const menuMobileRef = useRef(null);

  useEffect(() => {
    const handelClickOutSide = (event) => {
      if (menuMobileRef.current && !menuMobileRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }

    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown",handelClickOutSide)
    }
    return()=>{
      document.removeEventListener("mousedown",handelClickOutSide)
    }
  },[isMobileMenuOpen , setIsMobileMenuOpen ]);


  const handleMenuShopClick = (event) => {
    event.preventDefault();
    toggleMenu();
  };

  const handleMenuClick = (menuName, event) => {
    event.preventDefault(); // جلوگیری از رفتار پیش‌فرض
    setActiveMenu(menuName);
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleMenuShop = (event) => {
    event.preventDefault();
    setIsMenuShopOpen((prev) => !prev);
  };

  const handelClickMenuBasket = (event) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    toggleBasket();
  };

  

  return (
    <>
      <nav className="relative flex md:hidden bg-white dark:bg-zinc-700 px-4 w-full h-16 items-center justify-between transition-all duration-300">
        <button onClick={toggleMenu}>
          {isMobileMenuOpen ? (
            <IoCloseOutline className="h-6 w-6 dark:text-white" />
          ) : (
            <HiBars3 className="h-6 w-6 dark:text-white" />
          )}
        </button>
        <img
          src="./img/svgs/app-logo-type.svg"
          alt="لوگو"
          className="w-[100px] h-10"
        />

        <HiOutlineShoppingCart
          className="w-6 h-6 dark:text-white"
          onClick={toggleBasket}
        />
      </nav>
      <MobileBasket />

      {isMobileMenuOpen && (
        <>
          <div
            className="absolute top-0  h-full w-64 bg-white dark:bg-zinc-700 transition-all duration-500  overflow-scroll scrollbar-hide" ref={menuMobileRef}
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <div className="flex items-center justify-between p-4">
              <img src="/img/app-logo.png" alt="لوگو" className="h-10" />
              <img src="./img/svgs/app-logo-type.svg" alt="" />
              <IoCloseOutline
                className="h-5 w-5 cursor-pointer dark:text-white"
                onClick={toggleMenu}
              />
            </div>
            <span className="block h-px w-full bg-zinc-700 dark:bg-gray-100 opacity-10 my-4"></span>
            <ul className="text-right flex flex-col gap-6 p-4 dark:text-white">
              {/* صفحه اصلی */}
              <li onClick={(event) => handleMenuClick("صفحه اصلی", event)}>
                <a
                  href="/"
                  className={`flex items-center gap-x-2 ${
                    activeMenu === "صفحه اصلی"
                      ? "bg-orange-200 bg-opacity-10 rounded-md text-orange-300 p-2"
                      : ""
                  }`}
                >
                  <HiOutlineHome className="h-5 w-5" />
                  صفحه اصلی
                </a>
              </li>

              {/* فروشگاه */}
              <li>
                <a
                  href="/"
                  className="flex items-center gap-x-2"
                  onClick={toggleMenuShop}
                >
                  <CiShoppingBasket className="h-5 w-5" />
                  فروشگاه
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${
                      isMenuShopOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>
                {isMenuShopOpen && (
                  <ul className="mt-3 ml-6 space-y-3 mr-14">
                    <li>
                      <a
                        href="/"
                        className="hover:bg-orange-200 hover:bg-opacity-20 p-2 rounded-md"
                        onClick={(event) => handleMenuShopClick(event)}
                      >
                        قهوه ویژه
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="hover:bg-orange-200 hover:bg-opacity-20 p-2 rounded-md"
                        onClick={(event) => handleMenuShopClick(event)}
                      >
                        ویژه در سطح جهانی
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="hover:bg-orange-200 hover:bg-opacity-20 p-2 rounded-md"
                        onClick={(event) => handleMenuShopClick(event)}
                      >
                        قهوه درجه یک
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="hover:bg-orange-200 hover:bg-opacity-20 p-2 rounded-md"
                        onClick={(event) => handleMenuShopClick(event)}
                      >
                        ترکیب تجاری
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="hover:bg-orange-200 hover:bg-opacity-20 p-2 rounded-md"
                        onClick={(event) => handleMenuShopClick(event)}
                      >
                        کپسول قهوه
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="hover:bg-orange-200 hover:bg-opacity-20 p-2 rounded-md"
                        onClick={(event) => handleMenuShopClick(event)}
                      >
                        قهوه زینو برزیلی
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* سایر منوها */}
              <li onClick={(event) => handleMenuClick("دیکشنری", event)}>
                <a
                  href="/"
                  className={`flex items-center gap-x-2 ${
                    activeMenu === "دیکشنری"
                      ? "bg-orange-200 bg-opacity-10 rounded-md text-orange-300 p-2"
                      : ""
                  }`}
                >
                  <LiaSmsSolid className="h-5 w-5" />
                  دیکشنری
                </a>
              </li>
              <li onClick={(event) => handleMenuClick("درباره ما", event)}>
                <a
                  href="/"
                  className={`flex items-center gap-x-2 ${
                    activeMenu === "درباره ما"
                      ? "bg-orange-200 bg-opacity-10 rounded-md text-orange-300 p-2"
                      : ""
                  }`}
                >
                  <HiOutlineBriefcase className="h-5 w-5" />
                  درباره ما
                </a>
              </li>
              <li onClick={(event) => handleMenuClick("تماس با ما", event)}>
                <a
                  href="/"
                  className={`flex items-center gap-x-2 ${
                    activeMenu === "تماس با ما"
                      ? "bg-orange-200 bg-opacity-10 rounded-md text-orange-300 p-2"
                      : ""
                  }`}
                >
                  <LuPhoneOutgoing className="h-5 w-5" />
                  تماس با ما
                </a>
              </li>
            </ul>

            <span className="block h-px w-full bg-zinc-700 dark:bg-gray-100 opacity-10 my-4"></span>
            {/* footer nav mobile */}
            <ul className="text-orange-300 mr-5 child:flex  child:items-center child:gap-x-2 child:mt-7">
              <li className="">
                <CiLogin className="h-5 w-5" />
                <a
                  className="flex text-xl text-orange-300 tracking-tighter"
                  href="/"
                >
                  <span className="">ورود | ثبت‌نام</span>
                </a>
              </li>
              <li>
                <div className="flex gap-x-2 lg:gap-x-5 child:flex child:items-center child:gap-x-2 child:cursor-pointer">
                  {theme === "dark" ? (
                    <>
                      <span onClick={toggleTheme}>
                        <CiLight className={iconSize} />
                        تم تیره
                      </span>
                    </>
                  ) : (
                    <>
                      <span onClick={toggleTheme}>
                        {" "}
                        <IoMoonOutline className={iconSize} />
                        تم روشن
                      </span>
                    </>
                  )}
                </div>
              </li>
              <li>
                <CiShoppingBasket className="h-5 w-5" />
                <a
                  href="/"
                  className="flex text-xl text-orange-300 tracking-tighter"
                  onClick={(event) => {
                    handelClickMenuBasket(event);
                  }}
                >
                  <span> سبد خرید</span>
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};
