import AuthContext from "context/authContext";
import navbarData from "data/navbar.data";
import { MemberType } from "lib/enums/member.enum";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "store/store";

const Navbar = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("accessToken");
  const qty = useAppSelector((state) => state.cart.products)
    .map((item) => item.qty)
    .reduce((a: any, b: any) => a + b, 0);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("memberData");
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  if (location.pathname.includes("auth")) {
    return null;
  }
  return (
    <>
      {/* Main Navigation Menu */}
      <header
        id="navbar"
        className="sticky top-0 z-20 border-b border-default-200 bg-transparent transition-all"
      >
        <div className="lg:h-20 h-14 flex items-center">
          <div className="container">
            <div className="grid lg:grid-cols-3 grid-cols-2 items-center gap-4">
              <div className="flex">
                {/* Mobile Menu Toggle Button */}
                <button
                  className="lg:hidden block"
                  data-hs-overlay="#mobile-menu"
                >
                  <i
                    data-lucide="menu"
                    className="w-7 h-7 text-default-600 me-4 hover:text-primary"
                  />
                </button>
                {/* Navbar Brand Logo */}
                <Link to="/">
                  <img
                    src="assets/logo-dark-6dbab3e1.png"
                    alt="logo"
                    className="h-10 flex dark:hidden"
                  />
                  <img
                    src="assets/logo-light-35c89c2c.png"
                    alt="logo"
                    className="h-10 hidden dark:flex"
                  />
                </Link>
              </div>
              {/* Nevigation Menu */}
              <ul className="menu lg:flex items-center justify-center hidden relative">
                {/* Home Menu */}
                {navbarData.map((item) => (
                  <li key={item.title} className="menu-item">
                    <Link
                      to={item.path}
                      className={`inline-flex items-center text-sm lg:text-base font-medium text-default-800 py-2 px-4 rounded-full hover:text-primary ${
                        item.path === pathname && "active"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center justify-end gap-x-6">
                {/* Search Form Input */}
                <li className="2xl:flex relative menu-item hidden">
                  <input
                    className="ps-10 pe-4 py-2.5 block w-64 border-transparent placeholder-primary-500 rounded-full text-sm bg-primary-400/40 text-primary"
                    placeholder="Search for items..."
                    type="search"
                  />
                  <span className="absolute start-4 top-3">
                    <i
                      className="w-4 h-4 text-primary-500"
                      data-lucide="search"
                    />
                  </span>
                </li>
                {/* Search Button (small screen) */}
                <li className="2xl:hidden flex menu-item">
                  <button
                    data-hs-overlay="#mobileSearchSidebar"
                    className="relative flex text-base transition-all text-default-600 hover:text-primary"
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
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </li>
                {/* Cart Page link */}
                <li className="flex menu-item">
                  <Link
                    to="/cart"
                    className="relative flex text-base transition-all text-default-600 hover:text-primary"
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    {qty > 0 && (
                      <span className="absolute z-10 -top-2.5 end-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
                        {qty}
                      </span>
                    )}
                  </Link>
                </li>
                {/* User Dropdown */}
                <li className="flex menu-item">
                  <div className="hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]">
                    <a
                      className="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 relative flex items-center text-base transition-all text-default-600 hover:text-primary"
                      href="javascript:void(0)"
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
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </a>
                    {token && <p>{user?.memberNick}</p>}
                    <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 hidden z-20 bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg border border-default-100 p-1.5 dark:bg-default-50">
                      <ul className="flex flex-col gap-1">
                        {token ? (
                          <li>
                            <button
                              className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              onClick={logout}
                            >
                              <i className="h-4 w-4" data-lucide="log-out" />{" "}
                              Log Out
                            </button>
                          </li>
                        ) : (
                          <li>
                            <Link
                              className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              to="/auth/signin"
                            >
                              <i className="h-4 w-4" data-lucide="log-out" />{" "}
                              Log In
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Nav (Bottom Navbar) */}
      <div className="flex lg:hidden">
        <div className="fixed inset-x-0 bottom-0 h-16 w-full grid grid-cols-3 items-center justify-items-center border-t border-default-200 bg-white dark:bg-default-50 z-40">
          <a
            href="home.html"
            className="flex flex-col items-center justify-center gap-1 text-default-600"
            type="button"
          >
            <i className="fa-solid fa-house text-lg" />
            <span className="text-xs font-medium">Home</span>
          </a>
          <a
            href="product-grid.html"
            className="flex flex-col items-center justify-center gap-1 text-default-600"
            type="button"
          >
            <i className="fa-solid fa-utensils text-lg" />
            <span className="text-xs font-medium">Food</span>
          </a>
          <a
            href="wishlist.html"
            className="flex flex-col items-center justify-center gap-1 text-default-600"
            type="button"
          >
            <i className="fa-regular fa-heart text-lg" />
            <span className="text-xs font-medium">Wishlist</span>
          </a>
        </div>
      </div>
      {/* Mobile Menu (Sidebar Menu) */}
      <div
        id="mobile-menu"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all transform h-full max-w-[270px] w-full z-60 border-r border-default-200 bg-white dark:bg-default-50"
        tabIndex={-1}
      >
        <div className="flex justify-center items-center border-b border-dashed border-default-200 h-16 transition-all duration-300">
          <a href="home.html">
            <img
              src="assets/logo-dark-6dbab3e1.png"
              alt="logo"
              className="h-10 flex dark:hidden"
            />
            <img
              src="assets/logo-light-35c89c2c.png"
              alt="logo"
              className="h-10 hidden dark:flex"
            />
          </a>
        </div>
        <div className="h-[calc(100%-4rem)]" data-simplebar>
          <nav className="hs-accordion-group p-4 w-full flex flex-col flex-wrap">
            <ul className="space-y-2.5">
              <li>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                  href="home.html"
                >
                  Home
                </a>
              </li>
              <li className="hs-accordion" id="product-categories-accordion">
                <a
                  className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-primary hs-accordion-active:bg-default-100 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                  href="javascript:;"
                >
                  Product
                  <i
                    data-lucide="chevron-down"
                    className="w-5 h-5 ms-auto hs-accordion-active:rotate-180 transition-all"
                  />
                </a>
                <div
                  id="product-categories-accordion"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] hidden"
                >
                  <ul className="pt-2 ps-2">
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                        href="product-grid.html"
                      >
                        Product Grid
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                        href="product-list.html"
                      >
                        Product List
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                        href="product-detail.html"
                      >
                        Product Details
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                  href="wishlist.html"
                >
                  My Wishlist
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                  href="contact-us.html"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                  href="faqs.html"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                  href="error-404.html"
                >
                  Error Page
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                  href="auth-login.html"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                  href="auth-register.html"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                  href="auth-recoverpw.html"
                >
                  Forgot Password
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                  href="auth-reset-password.html"
                >
                  Reset Password
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Topbar Search Modal (Small Screen) */}
      <div
        id="mobileSearchSidebar"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-60 overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white shadow-sm rounded-lg">
            <div className="relative flex w-full">
              <span className="absolute start-4 top-3">
                <i className="w-4 h-4 text-primary-500" data-lucide="search" />
              </span>
              <input
                className="px-10 py-2.5 block w-full border-transparent placeholder-primary-500 rounded-lg text-sm bg-transparent text-primary-500"
                placeholder="Search for items..."
                type="search"
              />
              <button
                className="absolute end-4 top-3"
                data-hs-overlay="#mobileSearchSidebar"
              >
                <i className="w-4 h-4 text-primary-500" data-lucide="x" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
