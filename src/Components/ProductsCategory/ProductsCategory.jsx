import React from "react";
import { ProductCategories } from "../../data-productCategory";

function ProductsCategory() {
  return (
    <div className="container mx-auto flex flex-wrap justify-center gap-6 mt-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      {ProductCategories.map((productCat) => (
        <div
          className="flex flex-col items-center text-center mt-10 lg:mt-20"
          key={productCat.id}
        >
          {/* تنظیم اندازه لینک و تصویر */}
          <a
            href={productCat.link}
            className="block w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
          >
            <img className="w-full h-full" src={productCat.imgUrl} alt="" />
          </a>
          {/* متن زیر تصویر */}
          <span className="text-[14px] lg:text-xl font-DanaMedium mt-2 dark:text-white">
            {productCat.description}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProductsCategory;
