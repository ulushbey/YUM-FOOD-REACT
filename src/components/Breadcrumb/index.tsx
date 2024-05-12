import React from "react";

const Breadcrumb = () => {
  return (
    <section className="lg:flex items-center hidden bg-default-400/10 h-14">
      <div className="container">
        <div className="flex items-center">
          <ol
            aria-label="Breadcrumb"
            className="flex items-center whitespace-nowrap min-w-0 gap-2"
          >
            <li className="text-sm">
              <a
                className="flex items-center gap-2 align-middle text-default-800 transition-all leading-none hover:text-primary-500"
                href="javascript:void(0)"
              >
                <i className="w-4 h-4" data-lucide="home" />
                Home
                <i className="w-4 h-4" data-lucide="chevron-right" />
              </a>
            </li>
            <li
              aria-current="page"
              className="text-sm font-medium text-primary truncate leading-none hover:text-primary-500"
            >
              Cart
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
