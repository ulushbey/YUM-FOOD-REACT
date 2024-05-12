import productSortData from "data/productSort.data";
import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const FilterHeader = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "DISH";
  const selectedOrder = searchParams.get("order") || "createdAt";
  const selectedOrderTitle = productSortData.find(
    (item) => item.value === selectedOrder
  )?.title;
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 mb-10">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-4"></div>
      <div className="flex items-center">
        <span className="text-base text-default-950 me-3">Sort By :</span>
        <div className="hs-dropdown relative inline-flex [--placement:bottom-left]">
          <button
            className="hs-dropdown-toggle flex items-center gap-2 font-medium text-default-950 text-sm py-2.5 px-4 xl:px-5 rounded-full border border-default-200 transition-all"
            type="button"
          >
            {selectedOrderTitle}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {/* end dropdown button */}
          <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 hidden z-20 bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg border border-default-100 p-1.5 dark:bg-default-50">
            <ul className="flex flex-col gap-1">
              {productSortData.map((sortItem) => (
                <li key={sortItem.value}>
                  <Link
                    to={`/products?category=${selectedCategory}&order=${sortItem.value}`}
                    className={`${
                      selectedOrder === sortItem.value &&
                      "text-default-700 bg-default-400/20"
                    } flex justify-center items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-400/20 rounded`}
                  >
                    {sortItem.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* text-default-700 bg-default-400/20 */}
            {/* end dropdown items */}
          </div>
          {/* end dropdown menu */}
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
