import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  if (location.pathname.includes("auth")) {
    return null;
  }
  return (
    <>
      {/* <section className="lg:py-16 py-6">
        <div className="container">
          <div className="bg-primary/10 rounded-lg">
            <div className="grid lg:grid-cols-2 items-center gap-6">
              <div className="relative lg:p-20 p-6 h-full">
                <span className="absolute end-16 top-1/3 text-xl rotate-45">
                  😃
                </span>
                <span className="absolute end-0 top-1/2 text-xl rotate-45">
                  🔥
                </span>
                <span className="absolute bottom-40 end-40 h-2 w-2 inline-flex items-center justify-center bg-primary text-white rounded-full" />
                <div className="hidden sm:block absolute -bottom-10 lg:bottom-10 lg:end-0 end-10">
                  <div className="bg-default-50 rounded-full p-2 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full overflow-hidden">
                        <img src="assets/avatar4-85475652.png" />
                      </div>
                      <div>
                        <h6 className="text-base font-medium text-default-900 mb-1">
                          Richard Watson
                        </h6>
                        <p className="text-sm font-medium text-default-500">
                          Food Courier
                        </p>
                      </div>
                      <div className="h-14 w-14 inline-flex items-center justify-center rounded-full bg-primary text-white">
                        <i data-lucide="phone" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="inline-flex py-2 px-4 text-sm text-primary rounded-full bg-primary/20 mb-6">
                  Download App
                </span>
                <h2 className="text-3xl/relaxed font-semibold text-default-900 max-w-sm mb-6">
                  Get Started With Us Today!
                </h2>
                <p className="text-default-900 text-base max-w-md mb-10">
                  Discover food wherever and whenever and get your food
                  delivered quickly.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex py-4 px-10 font-medium text-white bg-primary rounded-full hover:bg-primary-500 transition-all"
                >
                  Get started
                </a>
              </div>
              <div className="relative pt-20 px-20">
                <span className="absolute end-10 bottom-28 text-3xl -rotate-45">
                  🔥
                </span>
                <span className="absolute bottom-10 end-20 h-3 w-3 inline-flex items-center justify-center bg-primary text-white rounded-full" />
                <span className="absolute top-1/4 end-10 h-2.5 w-2.5 inline-flex items-center justify-center bg-yellow-400 text-white rounded-full" />
                <span className="absolute end-1/4 top-12 text-xl -rotate-45">
                  😋
                </span>
                <span className="absolute start-10 top-12 h-2 w-2 inline-flex items-center justify-center bg-primary text-white rounded-full" />
                <img
                  src="assets/mockup-c20fe925.png"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <footer className="border-t border-default-200">
        <div className="container">
          <div className="grid lg:grid-cols-3 items-center gap-6 lg:py-10 py-6">
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 font-semibold text-default-950">About</h5>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">About Us</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">Features</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">News</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">Careers</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">Services</a>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 font-semibold text-default-950">
                    Company
                  </h5>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">Our Team</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">Partner with Us</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">FAQs</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">Blog</a>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 font-semibold text-default-950">
                    Support
                  </h5>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">About</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">Support Center</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">Feedback</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">Contact Us</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">Accessibility</a>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 font-semibold text-default-950">
                    Get in touch
                  </h5>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">(+123) 456 789 123</a>
                  </div>
                  <div className="text-default-600">
                    <a href="javascript:void(0);">example@mail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="#!" className="cursor-pointer">
                      <i
                        data-lucide="phone"
                        className="h-6 w-6 transition-all text-default-600 hover:text-primary"
                      />
                    </a>
                    <a href="#!" className="cursor-pointer">
                      <i
                        data-lucide="globe"
                        className="h-6 w-6 transition-all text-default-600 hover:text-primary"
                      />
                    </a>
                    <a href="#!" className="cursor-pointer">
                      <i
                        data-lucide="instagram"
                        className="h-6 w-6 transition-all text-default-600 hover:text-primary"
                      />
                    </a>
                    <a href="#!" className="cursor-pointer">
                      <i
                        data-lucide="twitter"
                        className="h-6 w-6 transition-all text-default-600 hover:text-primary"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-3">
                <div className="bg-primary/10 rounded-lg">
                  <div className="p-8">
                    <form className="space-y-2 mb-6">
                      <label
                        htmlFor="subscribeEmail"
                        className="text-lg font-medium text-default-950 mb-4"
                      >
                        Subscribe
                      </label>
                      <div className="flex rounded-md shadow-sm">
                        <input
                          type="email"
                          id="subscribeEmail"
                          name="subscribeEmail"
                          className="py-3 px-4 block w-full bg-white border-default-200 rounded-s-md text-sm dark:bg-default-50"
                          placeholder="Email address"
                        />
                        <button
                          type="button"
                          className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-e-md border border-transparent font-semibold bg-primary text-white hover:bg-primary-500 transition-all text-sm"
                        >
                          <i data-lucide="arrow-right" className="h-5 w-5" />
                        </button>
                      </div>
                    </form>
                    <p className="text-sm text-default-500 mb-6">
                      A Res is a self-service shop offering a wide variety of
                      food, beverages &amp; household products we’re engage with
                      their clients &amp; their team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 border-t border-default-200 lg:flex hidden">
            <div className="container">
              <div className="grid lg:grid-cols-2 items-center gap-6">
                <div>
                  <p className="text-default-600">
                    Design crafted
                    <i
                      data-lucide="heart"
                      className="inline h-4 w-4 text-red-500 fill-red-500"
                    />
                    by Coderthemes.com
                  </p>
                </div>
                <div className="flex justify-end gap-6">
                  <a
                    href="javascript:void(0)"
                    className="text-default-500 font-medium"
                  >
                    Terms
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-default-500 font-medium"
                  >
                    Privacy
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-default-500 font-medium"
                  >
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Back to Top & Light/Dark Toggle */}
      <div className="fixed lg:bottom-5 end-5 bottom-18 flex flex-col items-center bg-primary/25 rounded-full z-10">
        <button
          className="h-0 w-8 opacity-0 flex justify-center items-center transition-all duration-500 translate-y-5 z-10"
          data-toggle="back-to-top"
        >
          <i
            className="h-5 w-5 text-primary-500 mt-1"
            data-lucide="chevron-up"
          />
        </button>
        <button className="rounded-full h-10 w-10 bg-primary text-white flex justify-center items-center z-20">
          <i className="h-5 w-5" data-lucide="sun" id="light-theme" />
          <i className="h-5 w-5" data-lucide="moon" id="dark-theme" />
        </button>
      </div>
    </>
  );
};

export default Footer;
