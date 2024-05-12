import categoryData from "data/category.data";
import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const FilterSidebar = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  return (
    <div
      className="hs-overlay hs-overlay-open:translate-x-0 hidden max-w-xs lg:max-w-full lg:w-1/4 w-full -translate-x-full fixed top-0 start-0 transition-all transform h-full z-60 lg:z-auto bg-white lg:translate-x-0 lg:block lg:static lg:start-auto dark:bg-default-50"
      id="filter_Offcanvas"
      tabIndex={-1}
    >
      <div className="flex justify-between items-center py-3 px-4 border-b border-default-200 lg:hidden">
        <h3 className="font-medium text-default-800">Filter Options</h3>
        <button
          className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-default-500 hover:text-default-700 text-sm"
          data-hs-overlay="#filter_Offcanvas"
          type="button"
        >
          <span className="sr-only">Close modal</span>
          <i className="h-5 w-5" data-lucide="x" />
        </button>
      </div>
      <div
        className="h-[calc(100vh-128px)] overflow-y-auto lg:h-auto"
        data-simplebar
      >
        <div className="p-6 lg:p-0 divide-y divide-default-200">
          <div>
            <button
              className="hs-collapse-toggle py-4 inline-flex justify-between items-center gap-2 transition-all uppercase font-medium text-lg text-default-900 w-full open"
              data-hs-collapse="#all_categories"
              id="hs-basic-collapse"
              type="button"
            >
              Category
            </button>
            <div
              className="hs-collapse w-full overflow-hidden transition-[height] duration-300 open"
              id="all_categories"
            >
              <div className="relative flex flex-col space-y-4 mb-6">
                {categoryData.map((category) => (
                  <Link
                    to={`/products?category=${category}`}
                    key={category}
                    className="flex items-center"
                  >
                    <input
                      className="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                      id={category}
                      type="checkbox"
                      checked={selectedCategory === category}
                    />
                    <label
                      className="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                      htmlFor={category}
                    >
                      {category}
                    </label>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* end category */}
        </div>
      </div>
      <div className="block lg:hidden py-4 px-4 border-t border-default-200">
        <a
          className="w-full inline-flex items-center justify-center rounded border border-primary bg-primary px-6 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary focus:ring focus:ring-primary/50"
          href="javascript:void(0)"
        >
          Reset
        </a>
      </div>
    </div>
  );
};

export default FilterSidebar;
