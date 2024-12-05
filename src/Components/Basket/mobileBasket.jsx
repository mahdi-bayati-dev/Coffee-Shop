import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5"; // آیکون بستن از کتابخانه react-icons
import { useBasket } from "../BasketContext/BasketContext"; // استفاده از context برای مدیریت وضعیت سبد خرید
import { SampleProduct } from "../../data"; // داده‌های نمونه محصولات

function MobileBasket() {
  const { isBasketOpen, toggleBasket } = useBasket(); // دسترسی به وضعیت باز یا بسته بودن سبد و متد تغییر آن
  const items = SampleProduct; // داده‌های محصولات

  const menuBasketRef = useRef(null); // استفاده از useRef برای ارجاع به DOM مربوط به سبد خرید

  // اضافه کردن و حذف لیسنر برای کلیک خارج از سبد
  useEffect(() => {
    const handleClickOutside = (event) => {
      // بررسی اینکه کلیک خارج از سبد انجام شده است یا نه
      if (
        menuBasketRef.current &&
        !menuBasketRef.current.contains(event.target) &&
        isBasketOpen
      ) {
        toggleBasket(); // بستن سبد در صورت کلیک بیرون
      }
    };

    if (isBasketOpen) {
      document.addEventListener("mousedown", handleClickOutside); // افزودن لیسنر
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // حذف لیسنر در زمان تخریب کامپوننت یا تغییر وضعیت
    };
  }, [isBasketOpen, toggleBasket]); // وابسته به وضعیت باز بودن سبد و متد تغییر آن

  if (!isBasketOpen) return null; // اگر سبد باز نباشد، نمایش ندهد

  return (
    <div
      className="absolute top-0 left-0 h-full w-64 bg-white dark:bg-zinc-700 transition-all duration-500 overflow-scroll scrollbar-hide"
      ref={menuBasketRef} // ارجاع DOM به متغیر
      style={{ maxHeight: "100vh", overflowY: "auto" }}
    >
      {/* هدر سبد خرید */}
      <div className="flex items-center justify-between p-4">
        <IoCloseOutline
          className="h-5 w-5 cursor-pointer dark:text-white"
          onClick={toggleBasket} // بستن سبد با کلیک روی آیکون
        />
        <h2 className="text-lg font-bold dark:text-white">سبد خرید</h2>
      </div>
      
      {/* نمایش محصولات در سبد */}
      <div className="container_product">
        {items.map((item) => (
          <>
            <div key={item.id} className="flex items-center">
              <div className="w-36">
                <img
                  src={item.image} // تصویر محصول
                  alt={item.title} // متن جایگزین برای تصویر
                  className="w-full rounded-md"
                />
              </div>
              <div className="flex flex-col font-DanaMedium gap-4 p-5 text-right">
                <h3 className="text-zinc-700 dark:text-white line-clamp-2">
                  {item.title} {/* عنوان محصول */}
                </h3>
                <div className="flex flex-col">
                  <span className="text-teal-600 text-sm dark:text-emerald-500">
                    {item.discount} {/* تخفیف محصول */}
                  </span>
                  <span className="text-zinc-700 font-semibold dark:text-white">
                    {item.price} {/* قیمت محصول */}
                    <span className="font-normal text-sm dark:text-white">
                      تومان
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <span className="inline-block h-[2px] w-full bg-gray-300 my-4 bg-opacity-30"></span>
          </>
        ))}

        {/* بخش جمع کل و دکمه ثبت سفارش */}
        <div className="absolute bottom-0 mb-8 mx-4">
          <div className="flex justify-between items-center gap-x-4">
            <button className="font-Dana w-28 h-11 bg-teal-600 rounded-md text-white hover:bg-teal-700 transition">
              ثبت سفارش
            </button>
            <div>
              <p className="text-gray-300 text-[12px]">مبلغ قابل پرداخت</p>
              <span className="text-zinc-700 font-semibold dark:text-white">
                {items.reduce((sum, item) => sum + (item.price || 0), 0)} {/* محاسبه جمع کل */}
                <span className="font-normal text-sm dark:text-white"> تومان</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileBasket;
