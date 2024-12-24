import React from "react";
import { LuPhone } from "react-icons/lu";

function ContactUs() {
  return (
    <>
      <div className="container mt24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col lg:flex-row items-center mt-28 gap-y-5 lg:gap-x-5">
          <div>
            <img
              src="./CoffeeShop-Files/contact.png"
              alt=""
              className="w-[296px] h-[305px]"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[944px]">
            <div className="text-right text-zinc-700">
              <h2 className="font-Morabba-Bold text-3xl sm:text-4xl lg:text-5xl dark:text-white">
                یکی از بهترین قهوه ها !
              </h2>
              <span className="font-Morabba-Light text-xl sm:text-2xl lg:text-3xl mt-6 dark:text-white">
                کیفیت قهوه را از ما بخواهید ...
              </span>
            </div>
            <span className="text-right text-white"> . . .</span>
            <div>
              <p className="text-base sm:text-lg lg:text-2xl text-zinc-700 text-right mt-4 lg:mt-[14px] dark:text-white">
                فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه
                معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ
                همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد
                ما روز شما را می سازد!
              </p>
            </div>
            <div className="border-solid border-[2px] border-orange-300 rounded-4x1 px-4 py-4 text-orange-300 w-full lg:w-[229px] h-[60px] flex justify-center items-center mt-6">
              <LuPhone className="w-8 h-8" />
              <a href="/" className="text-xl">ثبت سفارش تلفنی</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
