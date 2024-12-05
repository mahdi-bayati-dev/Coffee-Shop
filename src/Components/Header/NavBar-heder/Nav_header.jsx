// کد بهینه شده و کامنت‌گذاری شده برای کامپوننت NavBarHeader
import React, { useState } from "react";
import { useTheme } from "../../ThemeProvider/ThemeProvider";
import BasketBay from "../../Basket/Basket";
import { IoMoonOutline } from "react-icons/io5";
import { CiLogin, CiLight } from "react-icons/ci";
import { MobileNav } from "../MobileNav/MobileNav";

const NavBarHeader = () => {
  // دریافت حالت تم و تابع تغییر تم از کانتکست
  const { theme, toggleTheme } = useTheme();

  // مدیریت وضعیت منوهای موبایل و فروشگاه
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isMenuShop, setIsMenuShop] = useState(false);

  // تابع تغییر وضعیت منوی موبایل
  const toggleMenu = () => setIsMobileMenu((prev) => !prev);

  // تابع تغییر وضعیت منوی فروشگاه
  const toggleMenuShop = () => setIsMenuShop((prev) => !prev);

  // کلاس CSS برای اندازه آیکون‌ها
  const iconSize = "w-[32px] h-[32px] cursor-pointer";

  return (
    <>
      {/* نوار ناوبری در دسکتاپ */}
      <nav className="hidden md:flex backdrop-blur-[6px] w-[98%] lg:w-[90%] h-20 rounded-3xl mx-auto flex items-center justify-between py-5 px-4 lg:px-10 fixed top-6 right-0 left-0">
        {/* لوگو و منوی اصلی */}
        <div className="nav-right flex items-center gap-x-3 lg:gap-x-9">
          <img src="/img/app-logo.png" alt="لوگو" />
          <ul className="flex gap-x-5 lg:gap-x-9 h-full items-center text-xl text-gray-300 tracking-tighter">
            <li>
              <a href="/" className="font-DanaMedium text-orange-200">
                صفحه اصلی
              </a>
            </li>
            <li className="relative group">
              <a href="/">فروشگاه</a>
              <ul className="absolute top-full delay-75 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all right-0 p-6 w-52 text-zinc-700 text-base space-y-4 tracking-normal shadow-normal bg-white rounded-2xl border-t-[3px] border-t-orange-300 dark:bg-zinc-700 dark:text-white">
                {[
                  "قهوه ویژه",
                  "ویژه در سطح جهانی",
                  "قهوه درجه یک",
                  "ترکیب تجاری",
                  "کپسول قهوه",
                  "قهوه زینو برزیلی",
                ].map((item, index) => (
                  <li key={index}>
                    <a href="/">{item}</a>
                  </li>
                ))}
              </ul>
            </li>
            {[
              { label: "دیکشنری", href: "/" },
              { label: "بلاگ", href: "/" },
              { label: "درباره ما", href: "/" },
              { label: "تماس با ما", href: "/" },
            ].map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* آیکون‌ها و ورود */}
        <div className="nav-left flex items-center gap-x-2 xl:gap-x-10 text-orange-200">
          <div className="flex gap-x-2 lg:gap-x-5">
            <BasketBay />
            {theme === "dark" ? (
              <CiLight className={iconSize} onClick={toggleTheme} />
            ) : (
              <IoMoonOutline className={iconSize} onClick={toggleTheme} />
            )}
          </div>
          {/* خط جداکننده */}
          <span className="w-px h-14 bg-white opacity-20"></span>
          {/* بخش ورود */}
          <div className="login flex items-center gap-x-2.5">
            <CiLogin className={iconSize} />
            <a className="flex text-xl text-orange-200" href="/">
              <span className="hidden xl:inline-block">ورود | ثبت‌نام</span>
            </a>
          </div>
        </div>
      </nav>

      {/* نوار ناوبری موبایل */}
      <MobileNav />
    </>
  );
};

export default NavBarHeader;
