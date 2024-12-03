import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import BasketBay from "../../Basket/Basket";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { CiShoppingBasket } from "react-icons/ci";
import { LiaSmsSolid } from "react-icons/lia";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuPhoneOutgoing } from "react-icons/lu";
function NavBarHeader() {
  const { theme, toggleTheme } = useTheme();
  const { isMobileMenu, setIsMobileMenu } = useState(false);

  const toggleMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <>
      <nav className=" hidden md:flex backdrop-blur-[6px] w-[98%] lg:w-[90%] h-20 rounded-3xl mx-auto flex items-center justify-between py-5 px-4 lg:px-10 fixed top-6 right-0 left-0">
        {/* Logo and Menu */}
        <div className="nav-right flex items-center gap-x-3 lg:gap-x-9">
          <div className="">
            <img src="/img/app-logo.png" alt="لوگو" />
          </div>
          <ul className="flex gap-x-5 lg:gap-x-9 h-full items-center text-xl text-gray-300 tracking-tighter child:leading-[56px] child-hover:text-orange-300 transition-all">
            <li>
              <a href="/" className="font-DanaMedium text-orange-200">
                صفحه اصلی
              </a>
            </li>
            <li className="relative group">
              <a href="/">فروشگاه</a>
              <ul className="absolute top-full delay-75 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all right-0 p-6 w-52 text-zinc-700 text-base space-y-4 tracking-normal shadow-normal child:transition-colors  bg-white rounded-2xl border-t-[3px]  border-t-orange-300 child-hover:text-orange-200 dark:bg-zinc-700 dark:text-white">
                <li>
                  <a href="/">قهوه ویژه</a>
                </li>
                <li>
                  <a href="/">ویژه در سطح جهانی</a>
                </li>
                <li>
                  <a href="/">قهوه درجه یک</a>
                </li>
                <li>
                  <a href="/">ترکیب تجاری</a>
                </li>
                <li>
                  <a href="/">کپسول قهوه</a>
                </li>
                <li>
                  <a href="/">قهوه زینو برزیلی</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">دیکشنری</a>
            </li>
            <li>
              <a href="/">بلاگ</a>
            </li>
            <li>
              <a href="/">درباره ما</a>
            </li>
            <li>
              <a href="/">تماس با ما</a>
            </li>
          </ul>
        </div>

        {/* Icons and Login */}
        <div className="nav-left flex items-center gap-x-2 xl:gap-x-10  text-orange-200">
          <div className="flex  gap-x-2 lg:gap-x-5 relative">
            <div className="group relative">
              <BasketBay />
            </div>

            {theme === "dark" ? (
              <CiLight
                className="w-[32px] h-[32px] cursor-pointer"
                onClick={toggleTheme}
              />
            ) : (
              <IoMoonOutline
                className="w-[32px] h-[32px] cursor-pointer"
                onClick={toggleTheme}
              />
            )}
          </div>
          {/* border */}
          <span className="w-px h-14 bg-white opacity-20"></span>

          {/* log-in */}
          <div className="login flex items-center gap-x-2.5">
            <CiLogin className="w-[32px] h-[32px]" />
            <a
              className="flex text-xl text-orange-200 tracking-tighter"
              href="/"
            >
              <span className="hidden xl:inline-block">ورود | ثبت‌نام</span>
            </a>
          </div>
        </div>
      </nav>
      {/* nav mobile */}
      <nav className="relative flex md:hidden bg-white dark:bg-zinc-700 px-4 w-full h-16  items-center justify-between">
        <button onClick={toggleMenu}>
          {isMobileMenu ? (
            <IoCloseOutline />
          ) : (
            <HiBars3 className="h-6 w-6 dark:text-white" />
          )}
        </button>
        <div>
          <img
            src="./img/svgs/app-logo-type.svg"
            alt=""
            className="w-[100px] h-10"
          />
        </div>
        <div>
          <HiOutlineShoppingCart className="w-6 h-6 dark:text-white" />
        </div>
      </nav>
      {/* menu mobile */}
      <div className="absolute top-0  h-full w-64 bg-white">
        <div className=" flex items-center gap-3 mt-3">
          <img src="/img/app-logo.png" alt="لوگو" />
          <img
            src="./img/svgs/app-logo-type.svg"
            alt=""
            className="w-[100px] h-10"
          />
          <IoCloseOutline className="h-5 w-5 mr-10 cursor-pointer" />
        </div>
        <span className="inline-block h-[2px] w-full bg-gray-100 my-4 "></span>
        <div>
          <ul className=" text-right flex flex-col gap-6 p-4">
            <li>
              <a href="/" className="flex items-center gap-x-2">
                <HiOutlineHome className="h-5 w-5"/>
                صفحه اصلی
              </a>
            </li>
            <li className="">
              <a href="/" className=" flex items-center gap-x-2">
                <CiShoppingBasket className="h-5 w-5"/>
                فروشگاه
              </a>
              {/* <ul className="">
                <li>
                  <a href="/">قهوه ویژه</a>
                </li>
                <li>
                  <a href="/">ویژه در سطح جهانی</a>
                </li>
                <li>
                  <a href="/">قهوه درجه یک</a>
                </li>
                <li>
                  <a href="/">ترکیب تجاری</a>
                </li>
                <li>
                  <a href="/">کپسول قهوه</a>
                </li>
                <li>
                  <a href="/">قهوه زینو برزیلی</a>
                </li>
              </ul> */}
            </li>
            <li>
              <a href="/" className=" flex items-center gap-x-2">
                <LiaSmsSolid className="h-5 w-5"/>
                دیکشنری
              </a>
            </li>
            <li>
              <a href="/" className=" flex items-center gap-x-2">
                <IoDocumentTextOutline className="h-5 w-5"/>
                بلاگ
              </a>
            </li>
            <li>
              <a href="/" className=" flex items-center gap-x-2">
                <HiOutlineBriefcase className="h-5 w-5"/>
                درباره ما
              </a>
            </li>
            <li>
              <a href="/" className=" flex items-center gap-x-2">
                <LuPhoneOutgoing className="h-5 w-5"/>
                تماس با ما
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBarHeader;
