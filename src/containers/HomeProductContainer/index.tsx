import HomeCarousel from "components/HomeCarousel";
import React, { useEffect, useState } from "react";
import categoryData from "data/category.data";
import { GET_PRODUCTS } from "services/product.service";
import { Product } from "lib/types/product";

const HomeProductContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoryData[0]);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts(selectedCategory, "createdAt", "1");
  }, []);

  const getProducts = async (category: string, order: string, page: string) => {
    const option = {
      category: category,
      order: order,
      page: Number(page),
    };
    const data = await GET_PRODUCTS(option);
    setProducts(data);
  };

  const selecteCategory = async (category: string) => {
    const option = {
      category: category,
      order: "createdAt",
      page: 1,
    };
    const data = await GET_PRODUCTS(option);
    setSelectedCategory(category);
    setProducts(data);
  };

  console.log("products: ", products);

  return (
    <section className="lg:py-16 py-6">
      <div className="container">
        <div className="grid lg:grid-cols-4 lg:gap-10 gap-6">
          <div>
            <div>
              <span className="inline-flex py-2 px-4 text-sm text-primary rounded-full bg-primary/20 mb-6">
                Menu
              </span>
              <h2 className="text-3xl font-semibold text-default-900 mb-6">
                Special Menu for you...
              </h2>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="lg:h-[30rem] h-auto lg:w-full w-screen custom-scroll overflow-auto lg:mx-0 -mx-4 px-2">
                <nav
                  className="flex lg:flex-col gap-2"
                  aria-label="Tabs"
                  role="tablist"
                  data-hs-tabs-vertical="true"
                >
                  {categoryData.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      className="flex p-1"
                      role="tab"
                      onClick={() => selecteCategory(item)}
                    >
                      <span
                        className={`hs-tab-active:bg-primary text-default-900 flex items-center justify-start gap-4 p-2 pe-6 lg:w-2/3 w-full transition-all hover:text-primary rounded-full ${
                          item === selectedCategory && " text-primary"
                        }`}
                      >
                        <span className=" hs-tab-active:bg-white h-14 w-14 inline-flex items-center justify-center rounded-full">
                          <img
                            src="assets/cup-3dff3c2f.svg"
                            className="h-8 w-8"
                          />
                        </span>
                        <span className="hs-tab-active:text-white text-base font-medium">
                          {item}
                        </span>
                      </span>
                    </button>
                  ))}
                </nav>
                {/* end tab */}
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="relative lg:mt-24">
              <div className="bg-primary/10 rounded-lg lg:pb-16">
                <div className="lg:p-6 p-4">
                  <HomeCarousel products={products ?? []} />
                </div>
              </div>
            </div>
            {/* end menu-sliders */}
          </div>
        </div>
      </div>
      {/* end container */}
    </section>
  );
};

export default HomeProductContainer;
