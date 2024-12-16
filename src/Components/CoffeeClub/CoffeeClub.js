import React from "react";
import { FaCompass } from "react-icons/fa";
import { MdLocalActivity } from "react-icons/md";
import { LuSquareActivity } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";

// کامپوننت برای کارت‌های آیکون
function FeatureCard({ icon: Icon, title }) {
  return (
    <div className="flex flex-col justify-end items-center w-[98px] h-[98px] bg-white rounded-2xl">
      <Icon className="w-12 h-12 text-emerald-600" />
      <span className="text-emerald-600">{title}</span>
    </div>
  );
}

function CoffeeClub() {
  return (
    <div className="container mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center px-6 py-11 rounded-2xl bg-emerald-600">
        
        {/* بخش تصویر و عنوان */}
        <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-6">
          <img src="/CoffeeShop-Files/club/diamond.png" alt="diamond" className="w-24 h-24 mx-auto lg:mx-0" />
          <div className="text-white text-center lg:text-right">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Morabba-Bold">کافی کلاب</h2>
            <p className="text-xl sm:text-2xl font-Morabba-Light">
              میدونستی میتونی با امتیاز هات قهوه بگیری ؟
            </p>
          </div>
        </div>

        {/* بخش کارت‌های ویژگی‌ها */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-5">
          <FeatureCard icon={FaCompass} title="چرخ و بخت" />
          <FeatureCard icon={MdLocalActivity} title="ماموریت ها" />
          <FeatureCard icon={LuSquareActivity} title="جایزه ها" />
        </div>

        {/* بخش امتیاز و دکمه دریافت جایزه */}
        <div className="flex flex-col items-center mt-6 lg:mt-0">
          <span className="text-3xl sm:text-4xl text-white font-DanaMedium">542</span>
          <span className="text-sm sm:text-[14px] text-white">امتیـــــــاز شما</span>
          <div className="flex items-center gap-x-2 bg-orange-300 rounded-full p-2 mt-2">
            <button className="text-white flex items-center gap-x-2">
              دریافت جایزه
              <IoIosArrowBack />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeClub;
