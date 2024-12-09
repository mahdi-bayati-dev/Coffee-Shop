import React from "react";

function CategoryBanner({ imgUrl, title, description, link }) {
    return (
      <a href={link} className="relative w-full">
        <img
          className="w-full h-full rounded-2xl"
          src={imgUrl}
          alt={title}
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-black via-black/70 to-transparent opacity-80"></div>
        <div className="absolute top-9 xl:top-16 right-12 text-white font-DanaMedium text-right">
          <h3 className="text-2xl sm:text-4xl">{title}</h3>
          <p className="text-base sm:text-2xl mt-7">{description}</p>
        </div>
      </a>
    );
  }

export default CategoryBanner;
