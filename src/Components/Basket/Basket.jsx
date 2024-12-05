import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import EmptyBasket from "./null-Basket";
import { SampleProduct } from "../../data";

// کامپوننت سبد خرید
function BasketBay() {
   // آرایه محصولات

  const items = SampleProduct; // لیست نمونه محصولات
const [productItems, setProductItems] = useState(items);
  return (
    <>
      <div className="relative group">
        {/* آیکون سبد خرید */}
        <HiOutlineShoppingCart className="w-[32px] h-[32px] cursor-pointer dark:text-white" />

        {/* محتوای سبد خرید */}
        <div className="absolute top-full delay-75  left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white shadow-lg p-4 w-[400px] rounded-2xl border-t-[3px] border-t-orange-300 dark:bg-zinc-800">
          {/* بررسی خالی بودن سبد */}
          {productItems.length === 0 ? (
            <EmptyBasket /> // اگر سبد خالی است
          ) : (
            <>
              {/* بخش هدر */}
              <div className="p-5  flex justify-between text-xs font-DanaMedium">
                <span className="text-gray-300">
                  {productItems.length} مورد
                </span>
                <a href="/" className="flex items-center text-orange-300">
                  مشاهده سبد خرید
                  <MdArrowBackIosNew />
                </a>
              </div>

              {/* لیست محصولات */}
              <div className="container_product">
                {items.map((item) => {
                  return (
                    // اضافه کردن return
                    <div key={item.id} className="flex items-center">
                      {/* تصویر محصول */}
                      <div className="w-36">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full rounded-md"
                        />
                      </div>
                      {/* اطلاعات محصول */}
                      <div className="flex flex-col font-DanaMedium gap-4 p-5 text-right">
                        <h3 className="text-zinc-700 dark:text-white line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="flex flex-col">
                          <span className="text-teal-600 text-sm dark:text-emerald-500">
                            {item.discount}
                          </span>
                          <span className="text-zinc-700 font-semibold dark:text-white">
                            {item.price}
                            <span className="font-normal text-sm dark:text-white">
                              {" "}
                              تومان{" "}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* خط جداکننده */}
              <span className="inline-block h-[2px] w-full bg-gray-300 my-4"></span>

              {/* مجموع قیمت و دکمه ثبت سفارش */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-300 text-sm">مبلغ قابل پرداخت</p>
                  <span className="text-zinc-700 font-semibold dark:text-white">
                    {productItems.reduce((sum, item) => sum + item.price, 0)}
                    <span className="font-normal text-sm dark:text-white">
                      تومان
                    </span>
                  </span>
                </div>
                <button className="font-Dana px-7 py-3 bg-teal-600 rounded-md text-white hover:bg-teal-700 transition">
                  ثبت سفارش
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BasketBay;
