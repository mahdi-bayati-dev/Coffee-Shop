import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import ArticleBox from "../ArticleBox/ArticleBox";
function ArticleContainer() {
  return (
    <div className="container mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div>
        <div className="flex justify-between">
          <h2>مطالب خواندنی</h2>
          <div className="flex items-center text-orange-300">
            <a href="/" className="text-base sm:text-lg md:text-xl">
              مشاهده همه محصولات
            </a>
            <FaChevronLeft className="text-xl sm:text-2xl" />
          </div>
        </div>
        <div>
            <ArticleBox/>

        </div>
      </div>
    </div>
  );
}

export default ArticleContainer;
