import { serverApi } from "lib/config";
import { Product } from "lib/types/product";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function HomeCarousel({ products }: { products: Product[] }) {
  const ref = useRef<any>(null);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div role="tabpanel" aria-labelledby="burger-menu-item">
      <div className="grid grid-cols-1">
        <div className="  w-full h-full">
          <div className="">
            <Slider ref={ref} {...settings}>
              {products.map((item) => (
                <div key={item._id} className="p-2">
                  <div className="relative rounded-lg overflow-hidden cursor-pointer">
                    <img
                      src={`${serverApi}/${item.productImages[0]}`}
                      className="h-full w-full"
                    />
                    <div className="absolute inset-0 bg-default-950/20">
                      <div className="inline-flex items-end h-full w-full">
                        <div className="p-6">
                          <h5 className="text-xl font-medium text-white mb-2">
                            {item.productName}
                          </h5>
                          <h5 className="text-xl font-semibold text-white mb-2">
                            <span className="text-base font-medium text-yellow-400">
                              $
                            </span>
                            {item.productPrice}
                          </h5>
                          <Link
                            to={`/products/${item._id}`}
                            className="inline-flex items-center text-white border-b border-dashed border-white"
                          >
                            Order Now
                            <i
                              data-lucide="chevron-right"
                              className="h-5 w-5"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* end pizza menu slider */}
      </div>
      {/*end grid*/}
      <div className="lg:flex items-center gap-1 absolute !-top-10 !end-15 hidden">
        <button
          onClick={() => ref?.current?.slickPrev()}
          className="swiper-button-next after:content-[] h-12 w-12 flex justify-center items-center rounded-full text-white bg-primary transition-all"
        >
          <i className="fa-solid fa-angle-left" />
        </button>
        <button
          onClick={() => ref?.current?.slickNext()}
          className="swiper-button-prev after:content-[] h-12 w-12 flex justify-center items-center rounded-full text-white bg-primary transition-all"
        >
          <i className="fa-solid fa-angle-right" />
        </button>
      </div>
      <div className="lg:flex hidden">
        <div className="swiper-pagination !bottom-12 !start-0" />
        <span className="absolute bottom-0 start-1/4 z-10">
          <img src="data:image/png;base64,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" />
        </span>
        <span className="absolute -bottom-12 -end-0 z-10">
          <img src="assets/leaf-ed221ba8.png" />
        </span>
      </div>
    </div>
  );
}

export default HomeCarousel;
