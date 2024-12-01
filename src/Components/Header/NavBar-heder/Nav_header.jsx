import React, { useState, createContext, useEffect } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
function NavBarHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="backdrop-blur-[6px] w-[90%] h-20 rounded-3xl mx-auto flex items-center justify-between py-5 px-10 fixed top-6 right-0 left-0">
      {/* Logo and Menu */}
      <div className="nav-right flex items-center gap-x-9">
        <div className="">
          <img src="/img/app-logo.png" alt="لوگو" />
        </div>
        <ul className="flex gap-x-9 h-full items-center text-xl text-gray-300 tracking-tighter child:leading-[56px] child-hover:text-orange-300 transition-all">
          <li>
            <a href="/" className="font-DanaMedium text-orange-200">
              صفحه اصلی
            </a>
          </li>
          <li className="relative group">
            <a href="/">فروشگاه</a>
            <ul className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all right-0 p-6 w-52 text-zinc-700 text-base space-y-4 tracking-normal shadow-normal child:transition-colors  bg-white rounded-2xl border-t-[3px]  border-t-orange-300 child-hover:text-orange-200 dark:bg-zinc-700 dark:text-white">
              <li>
                <a href="#">قهوه ویژه</a>
              </li>
              <li>
                <a href="#">ویژه در سطح جهانی</a>
              </li>
              <li>
                <a href="#">قهوه درجه یک</a>
              </li>
              <li>
                <a href="#">ترکیب تجاری</a>
              </li>
              <li>
                <a href="#">کپسول قهوه</a>
              </li>
              <li>
                <a href="#">قهوه زینو برزیلی</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">دیکشنری</a>
          </li>
          <li>
            <a href="#">بلاگ</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
        </ul>
      </div>

      {/* Icons and Login */}
      <div className="nav-left flex items-center gap-x-10 text-orange-200">
        <div className="flex gap-x-5">
          <HiOutlineShoppingCart className="w-[32px] h-[32px] cursor-pointer" />
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
          <a className="flex text-xl text-orange-200 tracking-tighter" href="/">
            <span>ورود | ثبت‌نام</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBarHeader;
