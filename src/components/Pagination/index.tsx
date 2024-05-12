import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Pagination = ({ hasNext }: { hasNext: boolean }) => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const selectedOrder = searchParams.get("order") || "createdAt";
  const selectedPage = Number(searchParams.get("page") || "1");

  const [pages, setPages] = useState([1]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  if (hasNext && !loaded) {
    setPages([...pages, pages.length + 1]);
    setLoaded(true);
  }
  return (
    <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-end gap-y-6 gap-x-10 pt-6">
      {/* end nav */}
      <nav>
        <ul className="inline-flex items-center space-x-2 rounded-md text-sm">
          <li>
            <button
              onClick={() =>
                navigate(
                  `/products?category=${selectedCategory}&order=${selectedOrder}&page=${
                    selectedPage - 1
                  }`
                )
              }
              disabled={selectedPage <= 1}
              className="inline-flex items-center justify-center h-9 w-9 bg-default-100 rounded-full transition-all duration-500 text-default-800 hover:bg-primary hover:border-primary hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </li>
          <li>
            <ul className="inline-flex items-center space-x-2 rounded-md text-sm">
              {pages.map((item) => (
                <li key={item}>
                  <Link
                    to={`/products?category=${selectedCategory}&order=${selectedOrder}&page=${item}`}
                    className={`inline-flex items-center justify-center h-9 w-9 bg-default-100 rounded-full transition-all duration-500 text-default-800 hover:bg-primary hover:border-primary hover:text-white ${
                      selectedPage == item &&
                      "border-primary  text-white bg-primary"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <button
              onClick={() =>
                navigate(
                  `/products?category=${selectedCategory}&order=${selectedOrder}&page=${
                    selectedPage + 1
                  }`
                )
              }
              disabled={!hasNext}
              className="inline-flex items-center justify-center h-9 w-9 bg-default-100 rounded-full transition-all duration-500 text-default-800 hover:bg-primary hover:border-primary hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </li>
        </ul>
        {/* end ul */}
      </nav>
      {/* end nav */}
    </div>
  );
};

export default Pagination;
