import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCart from "../product/product-cart/product-cart";
import { ProductCartBestSeller } from "../../data-BestSeller";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function BestSeller() {
  const swiperRef = useRef(null); // ذخیره instance مربوط به Swiper

  // هندلر برای دکمه‌های کاستوم
  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev(); // حرکت به اسلاید قبلی
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext(); // حرکت به اسلاید بعدی
  };

  return (
    <div className="container mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="flex justify-between">
        <div className="text-right text-zinc-700 gap-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-Morabba-Medium dark:text-white">
            محصولات پر فروش
          </h1>
          <span className="text-xl sm:text-2xl md:text-3xl font-Morabba-Medium dark:text-white">
            پیشنهاد قهوه خور ها ...
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          {/* دکمه قبلی */}
          <button
            onClick={handlePrev}
            className="bg-white dark:bg-zinc-700 rounded-full w-11 h-11 transition-all hover:bg-gray-300 dark:hover:bg-white dark:hover:child:text-zinc-700"
          >
            <IoIosArrowBack className="text-zinc-700 dark:text-white items-center mx-auto w-[26px] h-[26px]" />
          </button>
          {/* دکمه بعدی */}
          <button
            onClick={handleNext}
            className="bg-white dark:bg-zinc-700 rounded-full w-11 h-11 transition-all hover:bg-gray-300 dark:hover:bg-white dark:hover:child:text-zinc-700"
          >
            <IoIosArrowForward className="text-zinc-700 dark:text-white items-center mx-auto w-[26px] h-[26px]" />
          </button>
        </div>
      </div>
      <div className=" mt-6">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // ذخیره instance در ref
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 }, // فضای کمتر برای موبایل
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          
          
        >
          {ProductCartBestSeller.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCart product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BestSeller;
