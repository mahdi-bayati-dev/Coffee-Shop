import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import ArticleBox from "../ArticleBox/ArticleBox";

function ArticleContainer() {
  return (
    <div className="container mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div>
        {/* بخش عنوان و لینک */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-Morabba-Medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-zinc-700 dark:text-white">
            مطالب خواندنی
          </h2>
          <div className="flex items-center text-orange-300">
            <a href="/" className="text-sm sm:text-base md:text-lg">
              مشاهده همه محصولات
            </a>
            <FaChevronLeft className="text-lg sm:text-xl md:text-xl" />
          </div>
        </div>

        {/* گرید مطالب */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <ArticleBox
            title="طرز تهیه قهوه دمی با دستگاه اروپرس"
            img="CoffeeShop-Files/blogs/blog-1.png"
            time="2023-08-12T15:30:00Z"
          />
          <ArticleBox
            title="یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز"
            img="CoffeeShop-Files/blogs/blog-2.png"
            time="2023-08-12T15:30:00Z"
          />
          <ArticleBox
            title="طرز تهیه یک فنجان کافه زینو برزیلی"
            img="CoffeeShop-Files/blogs/blog-3.png"
            time="2023-08-12T15:30:00Z"
          />
          <ArticleBox
            title="طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی"
            img="CoffeeShop-Files/blogs/blog-4.png"
            time="2023-08-12T15:30:00Z"
          />
        </div>
      </div>
    </div>
  );
}

export default ArticleContainer;
