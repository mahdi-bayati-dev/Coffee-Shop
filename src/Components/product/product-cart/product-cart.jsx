import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoArrowSwitch } from "react-icons/go";
import { CiStar } from "react-icons/ci";

function ProductCart({ product }) {
  return (
    <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl flex flex-col justify-between min-h-[200px] sm:min-h-[250px] lg:min-h-[400px]">
      {/* تصویر محصول */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={`تصویر ${product.title}`}
          className="w-32 md:w-auto mx-auto h-32 sm:h-40 md:h-48 object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      {/* عنوان و قیمت محصول */}
      <div className="text-right text-[16px] sm:text-[18px] md:text-[20px] mt-5 cursor-pointer">
        <h2 className="text-zinc-700 dark:text-white font-DanaMedium text-sm md:text-xl line-clamp-2">
          {product.title}
        </h2>
        <span className="text-teal-600 mt-3 text-base md:text-xl">
          {product.price} <span className="text-xs md:text-sm">تومان</span>
        </span>
      </div>
      {/* دکمه‌ها و ستاره‌ها */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-x-2 sm:gap-x-3 cursor-pointer">
          <div
            className="bg-gray-200 rounded-full w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center dark:bg-zinc-800 hover:bg-teal-600 group hover:scale-110 transition dark:hover:bg-teal-600"
            aria-label="افزودن به سبد خرید"
          >
            <HiOutlineShoppingCart className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white" />
          </div>
          <GoArrowSwitch
            className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 hover:text-teal-600 hover:scale-110 transition"
            aria-label="تغییر"
          />
        </div>
        <div className="flex text-zinc-400 overflow-x-auto max-w-full">
          {[...Array(5)].map((_, index) => (
            <CiStar
              key={index}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCart;



