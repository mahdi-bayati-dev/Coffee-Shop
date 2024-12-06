import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import ProductCart from "../product-cart/product-cart";
import { ProductCartTest } from "../../../data-product"; // داده‌ها فرضی است

function ProductContainer() {
    return (
        <div className="container mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <div>
                <div className="flex justify-between">
                    {/* عنوان و توضیحات */}
                    <div className="text-right text-zinc-700">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-Morabba-Medium dark:text-white">
                            جدید ترین محصولات
                        </h1>
                        <span className="text-xl sm:text-2xl md:text-3xl font-Morabba-Medium dark:text-white">
                            فرآوری شده از دانه قهوه
                        </span>
                    </div>
                    {/* لینک */}
                    <div className="flex items-center text-orange-300">
                        <a href="/" className="text-base sm:text-lg md:text-xl">
                            مشاهده همه محصولات
                        </a>
                        <FaChevronLeft className="text-xl sm:text-2xl" />
                    </div>
                </div>
                {/* شبکه محصولات */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5  mt-6 ">
                    {ProductCartTest.map((product) => (
                        <ProductCart key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductContainer;
