import React from "react";

function ArticleBox() {
  return (
    <div className="bg-white rounded-2xl mt-12 w-[285px] h-[300px] relative overflow-hidden">
      {/* تصویر */}
      <div className="relative group">
        <img
          src="./CoffeeShop-Files/blogs/blog-1.png"
          alt=""
          className="p-2 rounded-bl-4x1 rounded-xl"
        />
        {/* لایه رنگی */}
        <div className="absolute inset-0 bg-orange-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300 m-2 rounded-bl-4x1 "></div>
        {/* متن در وسط */}
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img src="./img/svgs/app-logo-type.svg" alt=""  className=""/>
        </span>
      </div>

      {/* متن و تاریخ */}
      <div className="flex p-2 justify-between items-center">
        {/* متن */}
        <p className="text-[18px] text-right w-48">
          طرز تهیه قهوه دمی با دستگاه اروپرس
        </p>

        {/* تاریخ */}
        <div className="flex flex-col px-4 py-2 text-teal-600">
          <span className="font-DemiBold text-2xl">21</span>
          <span>مرداد</span>
          <span>1402</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleBox;
