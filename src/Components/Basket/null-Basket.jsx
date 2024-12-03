import React from "react";
import { SlBasket } from "react-icons/sl";

function EmptyBasket() {
  return (
    <div className="mx-auto h-[230px]  flex flex-col items-center justify-center">
      {/* آیکون سبد */}
      <SlBasket className="w-14 h-[54px] text-gray-400  mb-3 dark:text-white" />

      {/* متن پیام */}
      <span className="mt-3 text-zinc-700 dark:text-white">
        هنوز محصولی به سبد خرید اضافه نشده
      </span>

      {/* دکمه مشاهده فروشگاه */}
      <button className=" mt-3
       font-Dana px-7 py-3 bg-teal-600 rounded-md text-white hover:bg-teal-700 transition">
        مشاهده صفحه فروشگاه
      </button>
    </div>
  );
}

export default EmptyBasket;
