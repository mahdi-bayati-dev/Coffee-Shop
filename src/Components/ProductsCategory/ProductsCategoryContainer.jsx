import React from "react";
import ProductsCategory from "./ProductsCategory";

function ProductsCategoryContainer() {
  return (
    <div className="products-category-container">
      <h2 className="text-center font-bold text-lg my-4">دسته‌بندی محصولات</h2>
      <ProductsCategory />
    </div>
  );
}

export default ProductsCategoryContainer;
