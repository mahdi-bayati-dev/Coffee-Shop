import React from "react";

function parseDate(dateString) {
  const date = new Date(dateString);
  const day = date.toLocaleDateString("fa-IR", { day: "numeric" });
  const month = date.toLocaleDateString("fa-IR", { month: "long" });
  const year = date.toLocaleDateString("fa-IR", { year: "numeric" });
  return { day, month, year };
}
function ArticleBox({ title, img, time }) {
  const { day, month, year } = parseDate(time);

  return (
    <div className="bg-white dark:bg-zinc-700 rounded-xl shadow-lg overflow-hidden w-full max-w-[350px] sm:max-w-[300px] mx-auto flex flex-row sm:flex-col items-center">
      <div className="w-[220px] sm:w-[275px] h-[130px] sm:h-[187px] p-2">
        <img
          src={img}
          alt="عکس مقاله"
          className="w-full h-full object-cover rounded-bl-4x1 rounded-lg"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between p-4 w-2/3 sm:w-full">
        {/* عنوان */}
        <a
          href="/"
          className="text-right text-gray-800 dark:text-white text-lg font-medium leading-tight"
        >
          {title}
        </a>

        {/* خط جداکننده */}
        <div className="w-full h-[1px] bg-gray-300 sm:w-[1px] sm:h-12 sm:mx-4 my-4 sm:my-0"></div>

        {/* تاریخ و دکمه در حالت موبایل */}
        <div className="flex items-center justify-between sm:flex-col px-1 sm:px-2 sm:px-0 w-full sm:w-auto">
          {/* تاریخ */}
          <div className="flex flex-row sm:flex-col gap-x-[2px] justify-between text-teal-600">
            <span className="text-xs  sm:text-2xl sm:font-DemiBold">{day}</span>
            <span className="text-xs sm:text-sm">{month}</span>
            <span className="text-xs sm:text-sm">{year}</span>
          </div>

          {/* دکمه مطالعه */}
          <a
            href="/"
            className=" bg-orange-50 text-orange-500 rounded-lg px-4 py-1 text-sm hover:bg-orange-100 block sm:hidden"
          >
            مطالعه
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArticleBox;
