import HomeCarousel from "components/HomeCarousel";
import HomeProductContainer from "containers/HomeProductContainer";
import AuthContext from "context/authContext";
import React, { useContext } from "react";

const HomePage = () => {
  const { user, token } = useContext(AuthContext);

  return (
    <div>
      {/* Preloader */}

      {/* Hero Section */}
      <section className="lg:py-16 py-6 relative">
        <div className="absolute inset-0 blur-[60px] bg-gradient-to-l from-orange-600/20 via-orange-600/5 to-orange-600/0" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="py-20 px-10">
              <div className="flex items-center justify-center lg:justify-start order-last lg:order-first z-10">
                <div className="text-center lg:text-start">
                  <span className="inline-flex py-2 px-4 text-sm text-primary rounded-full bg-primary/20 mb-8 lg:mb-2">
                    #Special Food 🍇
                  </span>
                  <h1 className="lg:text-6xl/normal md:text-5xl/snug text-3xl font-bold text-default-950 capitalize mb-5">
                    We Offer
                    <span className="inline-flex relative">
                      <span>Delicious</span>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAB+CAMAAAB1a6g4AAAAQlBMVEUAAAD2giD0gSD2gCD1gCD1giDzgCD1giD0gSD0giD2gyD1gSD0gyD1gyDzgCD0gCD2gyD0gSD2gyD0gSD2giD1giDiNqzxAAAAFXRSTlMA34AQIJ9A72Bwv5C/z1Awr6Bvv3B3eDZRAAAHf0lEQVR42u2d7XaiMBRFucnNdwJx2vv+rzoJaZsqWkSpBc3+MYNrWdfq6bnZgArdVkCUUmvDmBAiWhsgo+gIBRmbSE9izGgt5YBdo+MotUnRWQCqAEDwPoqMY0c4kfEJOP6RYKNgppcD714KHLRxIsBXdD5XLDcMkS/7Uwy5yanI0deXs9GlUJ+7q3zQTFigjEr5OaMl8jVfX/ap5D6oj0wF6+WT1XTMMKgyioLpfibANULVLHqghArxKRJNIboIlIA8dvho7QzSOB9KR53ea6DYszFEFUTK8G+1M/Spo4qIckN3tYpi76wiIsghbkc7OdDcUGXdHvLk0sTxzy/MwLeoHS7NYcwzmg3PO9culC4OfOPa+cgzbLGeKUYgUt5JPqOdBzGvHS6ZV3l+NhQn7x2MEzPMaOfhzGtHmlji3MCwS2ZzG81wTjt/H+I12hlMjtmmX+Hv4L1QRJ7Js9rZ5vHwBe1I54ngj8rJjVWkhOYT7Ww1xRntoD7kcuoHz1HKkQicnGpnw3sYiTntSAcPTTPlWMZ6qp3dMdXOYMKD0uT9mCOeaGePMV7UDuY0o+5+FekUKSYn2tk9p9oZHKSHsludOtjKyRPt7GZtnGGiHZkewuej1QvpDT/SzhPUsTLVDteeSKy9dPW1kDnHJxnrCRPt4EGlBytONlMUDP+unQ0dxKzKVDtcQ57z1YL08pt2nrWPlRPt9D5t40pBVu083/o4ZaodPBAJvDtIgd+08zS+nqdqp4a5RpD9SxWyUrWTwwR2Y5X+pRril3Zeq5CVqp0xzFtsLi15+bVavmAhK1U7mLaGbhlcEPQtyMTJSqkhbSybbcX452r51PuQy8NkS6YcLXlsQVaOtYNvFPHqSppP7bQgK1U7Rl1VTC5KgNK2NXLCqJ1STMFnnwxkvrTTOKFqhxHgzDMVyA/tvOh+5M9U7Qyg3n9+msesnbZIXqJqBwOx7iKC3Kd2Gpeo2nHkLgkn5pi5aJX8maodRpGfTTKQGbXTKjnLp3YMhXNZBtKjdtoe0FUU7ehzWYqcJGvDfTVFO5rEtLCsaKdxLUU77DSzf8SKdhoLGLXD6P2orBSTdppwFlK086aGb/IGwFE7jUUU7XAA/m3oZSdakssp2pF1ucS0ydo6eRuM3FjFggf815K8laQdrmzZlqSzdho3krRjSH6UkgO0PfOb4QAftUTSjtrR4h1IcmxMUJBsBzn34ahXOUKIvo33fXBl31TXDdT2KO/GkKAh/QvQNe5EBTJdpFbK+2FEovNEbaW8G64odND2ztfgjaBr870Kmqhr870KPEfZ/L0KQB3YrrECETpo1lkFD23A1xtwovaRtRVAorYztN7OEFDzzgpEgi6QahO+xnzb7kDtHbJV5jt2hoLqGncCQGY89fveNe5Cj6d+O2Xf2mp5Hwg2Qvrfqb69TXYfjiSJ8a1H1t68vQtJThN2iTTfAG3EbwYBONiPUN8H1fbTbyYS6nGsSy1N27m8FUYGwdZZ71zL8tYkWQoPvxmoO7TTGreg6TBW8ZOsHd4+QH1TkqHDI2ln7fDQjnqW8o8Cz9rpvmHal01u/7KJ6b5TtOPaYc8SHB2Kdo4p2mEU2rviV4KWWNHOKUU7RsGOr9r7SCQoXbQzpWgHoS2Y1wkHsGjnh6/WH8i2IZ8f7gP/0M55inY0qLZXNH8lpqKdixTtYGzFnL04WNHOZT61o9uKeQnOSiWLdi7zpR08ELTjyDP0QIJ/audHqnYGaFN+8aKeRTtzVO1oaNcJPF0klanamadqh7MWZgUFKcardq6iagcP1MI8DrJoZwGjdlqYdY3MQVbtLKJqBw9p66UvwFiCrNpZTNUOpi14nrvBLIObkIOs2lnOsXa0J/WKcz7eo6A/Xi2Xc7JSDmnTvlY1600zJkHeFWaZcyVe5iMx9aYZdbW8g1PtyLQN7gVODkumxkKuGeREOzoSBfPUyyYyS+R7fqSdNZhoB9MDCnu+3eDsTXzLYFftrEvVTknzeW/zlnKcaGddqnZqmkropxl1roUilXKcaGd1ptrhfXpI9hnKOY61Ej2faOe3mGpnMLmcds8r52BsuUnqRDu/TdVOLWcYbx+8w3YO4+2DwfV8op3HMNUOljgt29NNrZ0dY9R8qp2HMtUO9i4QURCbrycfjAAiCjnGqXYeyWXtcJkmpuS5zX7mFAOV9Yhf0M7jmWqn1tOPeUbWb0hH2JcuKu96PNbOVu7NfV472LMYKMf894HmEIMiIoisx7Pa2c4IXdAOl9p5oESwzsiHJ5oydBFoDNHpgZ/VzgbPHF7UDpe5oYoSkDqqZfqdfhWOvWYiACVUECyFeF47W4xxXjslUVE6SipYwUy/aqgcpTZOWFCUAT9meFE7G/Vi4nrtoMxjlzItQLBRMKa1lAPyZdmhlFozJlJ+9eWEM3rAn7WzqzMHV2iHDylUJqIPQBUAsAmRcewIJzLR2gBw/CNepJJriXxWO/tK8Sbt4JAbZnLFhE9ARtERCjLB+yhSdMzkJiNer50dTPSEjWtn92xCO8/FQ7Sz0xVxAb+tnecu4YSVtbOZ/v0H4aWQ+jK6GMsAAAAASUVORK5CYII="
                        className="absolute -z-10 h-full w-full lg:flex hidden"
                      />
                    </span>
                    <span className="text-primary">Food</span> And Quick Service
                  </h1>
                  <p className="text-lg text-default-700 font-medium mb-8 md:max-w-md lg:mx-0 mx-auto">
                    Imagine you don’t need a diet because we provide healthy and
                    delicious food for you!.
                  </p>
                  <div className="flex flex-wrap items-center justify-center lg:justify-normal gap-5 mt-10">
                    <a
                      href="javascript:void(0)"
                      className="py-5 px-10 font-medium text-white bg-primary rounded-full hover:bg-primary-500 transition-all"
                    >
                      Order Now
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="text-primary flex items-center"
                    >
                      <span className="h-14 w-14 rounded-full border-2 border-e-transparent border-yellow-400 flex items-center justify-center me-2">
                        <i
                          data-lucide="play"
                          className="h-6 w-6 fill-primary"
                        />
                      </span>
                      <span className="font-semibold">How to Order</span>
                    </a>
                  </div>
                  <div className="mt-14">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                      <div className="flex items-center -space-x-1">
                        <div className="h-12 w-12">
                          <img
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-50"
                            src="assets/avatar1-25906796.png"
                          />
                        </div>
                        <div className="h-12 w-12">
                          <img
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-50"
                            src="assets/avatar2-189b0d01.png"
                          />
                        </div>
                        <div className="h-12 w-12">
                          <img
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-50"
                            src="assets/avatar3-2bbdc0fd.png"
                          />
                        </div>
                      </div>
                      <div>
                        <h1 className="text-base font-medium text-default-800">
                          Our Happy Customer
                        </h1>
                        <p className="text-base text-default-900">
                          <i
                            data-lucide="star"
                            className="h-4 w-4 inline text-yellow-400 fill-yellow-400"
                          />
                          4.7
                          <span className="text-default-500 text-sm">
                            (13.7k Reviews)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end grid-col */}
            <div className="relative flex items-center justify-center py-20">
              <span className="absolute top-0 start-0 text-3xl -rotate-[40deg]">
                🔥
              </span>
              <span className="absolute top-0 end-[10%] -rotate-12 h-14 w-14 inline-flex items-center justify-center bg-yellow-400 text-white rounded-lg">
                <i data-lucide="clock-3" className="h-6 w-6" />
              </span>
              <span className="absolute top-1/4 end-0 -rotate-12 h-4 w-4 inline-flex items-center justify-center bg-primary text-white rounded" />
              <div className="absolute bottom-1/4 -end-0 2xl:-end-24 hidden md:block lg:hidden xl:block">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAACpCAMAAACCueo0AAAAQlBMVEUAAAD/xwD/xwD/ywD/xwD/xgD/xwD/xwD/xgD/xgD/xwD/xwD/xwD/xwD/xQD/wwD/xwD/xwD/xwD/yAD/xgD/xwBcJNpgAAAAFXRSTlMAIN8Q72C/nzCQcFDPQIBAgI+vf6De6s6XAAADjklEQVRo3u2a626jMBCFPb7hGzQhnfd/1XUEuwQoWzscS6ma86eVqn6ZwZ5rEEKJBuqkgzMNM18VGioz1Quw6JO5E3CZoMRPUidvcCbdbwGcmjI1EZrqM1XCqZdM1R9oatQZG9FUki0CgZKO4rfLjVc81LY4rsAtqJcfRr01oRo49RNfD7MG/7NKVwuFq4IzI7OFQ/ulxoKva4BTPzPVoaEqMUv4YZFudVgfcOoF/1SzYi9+uz4inkmnw1U5Y4Kaf51+ulP3SoVR8l2juEsya3uNTownAuvGk+YKrXiWzFAenoTKO0GnsZvdvyTN/6TpOWiQNmz+VfWDzWT7TIel/nsOvVH3HGBsMnX9fvi+GbxLFmNddtB/nwS9rMCSLJmhFAky5dixYi7L2KLCZeoK0SVjU8ntHOoWDzIWGFrqfJdMeRk2xclKP1pjxKHI2tJcoR+TlQEN85fHWI2gYb7P/qv1MA+otHKVrHsNGQ38OpxJfk0lm1yV/1JsqfsEF6vypMoOqy3V76eQutnGstx5SntoXYyqWHCnJyhA7aEGMjCHFOFQ2hRwd8+4Fbp+1VUpuW7ila6DMvNXQbEpMdHTeajwS6qpFy1xunsAw4nkZw+nGHr+Bo5F6yylqnLfcDxwrRJNqFkzfxwW0G51U3XNQvz4j9saWZ5Pu+IaaYtNNar041vMtJ8Fplb346RBa3PJdvVUZUG/na7fJwb1ELkFUJLftrF25TF5B+jht71GkZ3sYNuxhWmKG9hF5nronStgzsG5ZrjjZ6YyU5uyfON2gaXDUcxJ91yr7zKVuy+NpUCl6TbuT2OLVTdTdUdGv3fT36npXyQHC1hLzld8nqtnGcRyb3BTxE2yUUC/ltGpMy+xl29hhAGvcJfch1YCV7sl9cO070te+yuMv+3by5+TanROVsDlpRNvvbrcQHAmyQb36cacGhjKpoGhEm4oNzC0a2MoPuk1eStIsyY4NHbvN42Aoi4A4jEe7L5PqN9syq7MTIB4DJvvLwdE7KR1F+8BLdgmyp2FZCN8G6J5MRX5YjH8LeBxgmoF7RVnDWjv0UdlZ6YmZCWaFRp4303bBaj3Uk3rH2mA3pMQYcYbAnk/CLL8V/J2Epvm9z6C5kd1dNp76ezCOx+0foLqDVKfslTyXtr36uQ4tydC0vMiuRBB3ttLLxDqF2IgXKs8ExW2rdUWvVDzL7Kie+utt36V/gAoj0UJQoRlYQAAAABJRU5ErkJggg==" />
                <div className="flex items-center gap-2 p-2 pe-6 bg-default-50 rounded-full shadow-lg">
                  <img
                    src="assets/avatar1-25906796.png"
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <h6 className="text-sm font-medium text-default-900">
                      Jakob Culhane
                    </h6>
                    <p className="text-[10px] font-medium text-default-900">
                      Healthy and Delicious Food
                    </p>
                    <span className="inline-flex gap-0.5">
                      <i
                        data-lucide="star"
                        className="h-3 w-3 text-yellow-400 fill-yellow-400"
                      />
                      <i
                        data-lucide="star"
                        className="h-3 w-3 text-yellow-400 fill-yellow-400"
                      />
                      <i
                        data-lucide="star"
                        className="h-3 w-3 text-yellow-400 fill-yellow-400"
                      />
                      <i
                        data-lucide="star"
                        className="h-3 w-3 text-yellow-400 fill-yellow-400"
                      />
                      <i
                        data-lucide="star"
                        className="h-3 w-3 text-default-200 fill-default-200"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <span className="absolute bottom-0 end-0 -rotate-12 h-4 w-4 inline-flex items-center justify-center bg-primary text-white rounded-full" />
              <span className="absolute -bottom-16 end-1/3 text-3xl">🔥</span>
              <div className="absolute bottom-0 start-0">
                <div className="flex items-center gap-2 p-2 pe-6 bg-default-50 rounded-full shadow-lg">
                  <span className="inline-flex items-center justify-center h-16 w-16 bg-primary/20 rounded-full">
                    <img
                      src="assets/burger-1-0c3ba5a6.svg"
                      className="h-10 w-10 rounded-full"
                    />
                  </span>
                  <div>
                    <h6 className="text-sm font-medium text-default-900">
                      MCD Veg Burger
                    </h6>
                    <span className="inline-flex gap-0.5">
                      <i
                        data-lucide="star"
                        className="h-3 w-3 text-yellow-400 fill-yellow-400"
                      />
                      <i
                        data-lucide="star"
                        className="h-3 w-3 text-yellow-400 fill-yellow-400"
                      />
                      <i
                        data-lucide="star"
                        className="h-3 w-3 text-yellow-400 fill-yellow-400"
                      />
                      <i
                        data-lucide="star"
                        className="h-3 w-3 text-yellow-400 fill-yellow-400"
                      />
                      <i
                        data-lucide="star"
                        className="h-3 w-3 text-default-200 fill-default-200"
                      />
                    </span>
                    <h6 className="text-sm font-medium text-default-900">
                      <span className="text-sm text-primary">$</span> 8.14
                    </h6>
                  </div>
                </div>
              </div>
              {/* end icons && img */}
              <img src="assets/hero-f578fbc8.png" className="mx-auto" />
            </div>
            {/* end grid-col */}
          </div>
          {/* end grid */}
        </div>
        {/* end container */}
      </section>
      {/* About Us Section */}
      <section className="lg:py-16 py-6">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-start gap-10">
            <div className="flex items-center justify-center h-full w-full bg-default-500/5 rounded-lg">
              <img
                src="assets/about-us-d5778dfe.png"
                className="h-full w-full"
              />
            </div>
            <div>
              <span className="inline-flex py-2 px-4 text-sm text-primary rounded-full bg-primary/20 mb-6">
                About Us
              </span>
              <h2 className="text-3xl font-semibold text-default-900 max-w-xl mb-6">
                Where quality food meet Excellent services.
              </h2>
              <p className="text-default-500 font-medium max-w-2xl mb-16 xl:mb-20">
                It’s the perfect dining experience where every dish is crafted
                with fresh, high-quality ingredients and served by friendly
                staff who go.
              </p>
              <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-6">
                <div className="bg-transparent rounded-md shadow-lg border border-default-100 hover:border-primary transition-all duration-200">
                  <div className="p-6">
                    <div className="mb-6">
                      <img src="data:image/png;base64,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" />
                    </div>
                    <h3 className="text-xl font-medium text-default-900 mb-6">
                      Fast Foods
                    </h3>
                    <p className="text-base text-default-500">
                      Healthy Foods are nutrient-Dense Foods
                    </p>
                  </div>
                </div>
                {/* end grid-cols */}
                <div className="bg-transparent rounded-md shadow-lg border border-default-100 hover:border-primary transition-all duration-200">
                  <div className="p-6">
                    <div className="mb-6">
                      <img src="assets/vegetables-5e491677.png" />
                    </div>
                    <h3 className="text-xl font-medium text-default-900 mb-6">
                      Healthy Foods
                    </h3>
                    <p className="text-base text-default-500">
                      Healthy Foods are nutrient-Dense Foods
                    </p>
                  </div>
                </div>
                {/* end grid-cols */}
                <div className="bg-transparent rounded-md shadow-lg border border-default-100 hover:border-primary transition-all duration-200">
                  <div className="p-6">
                    <div className="mb-6">
                      <img src="data:image/png;base64,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" />
                    </div>
                    <h3 className="text-xl font-medium text-default-900 mb-6">
                      Fast Delivery
                    </h3>
                    <p className="text-base text-default-500">
                      Healthy Foods are nutrient-Dense Foods
                    </p>
                  </div>
                </div>
                {/* end grid-cols */}
              </div>
              {/* end grid */}
              <div className="flex flex-wrap items-center md:justify-start justify-center gap-4 mt-10">
                <a
                  href="javascript:void(0)"
                  className="py-3 px-10 font-medium text-white bg-primary rounded-full hover:bg-primary-500 transition-all"
                >
                  Get started
                </a>
                <div className="flex items-center gap-2">
                  <img
                    src="assets/avatar3-2bbdc0fd.png"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h6 className="text-base font-medium text-default-900">
                      Marley Culhane
                    </h6>
                    <p className="text-sm font-medium text-default-500">
                      Founder CEO
                    </p>
                  </div>
                </div>
              </div>
              {/* end flex */}
            </div>
          </div>
        </div>
      </section>
      {/* Menu Section */}
      <HomeProductContainer />
      {/* <HomeCarousel /> */}
      {/* Testimonials Section */}
      <section className="lg:py-16 py-6">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-20">
            <div>
              <div className="relative">
                <img
                  src="assets/testimonial-img-11d36fc9.png"
                  className="lg:mx-0 mx-auto"
                />
                <div className="absolute -bottom-10 end-20">
                  <div className="bg-white shadow-lg rounded-xl dark:bg-default-100">
                    <div className="p-6">
                      <h6 className="text-base font-semibold text-default-900 mb-2">
                        Our Reviewers
                      </h6>
                      <div className="flex items-center justify-center -space-x-1">
                        <div className="h-12 w-12">
                          <img
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-100"
                            src="assets/avatar1-25906796.png"
                          />
                        </div>
                        <div className="h-12 w-12">
                          <img
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-100"
                            src="assets/avatar2-189b0d01.png"
                          />
                        </div>
                        <div className="h-12 w-12">
                          <img
                            className="h-full w-full rounded-full object-cover object-center ring ring-default-100"
                            src="assets/avatar3-2bbdc0fd.png"
                          />
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary text-default-50 font-medium ring ring-default-100">
                          <span className="text-base"> 12K </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end Reviewers */}
                </div>
              </div>
            </div>
            <div>
              <span className="inline-flex py-2 px-4 text-sm text-primary rounded-full bg-primary/20 mb-6">
                Testimonials
              </span>
              <h2 className="text-3xl font-semibold text-default-900 max-w-xl mb-4">
                What They Say About Us.
              </h2>
              <div className="product-img-slider sticky-side-div">
                <div className="swiper clients-testimonial p-2">
                  <div className="swiper-wrapper mb-4">
                    <div className="swiper-slide">
                      <div className="relative cursor-pointer">
                        <div className="flex items-center gap-3 mb-12">
                          <img
                            src="assets/avatar1-25906796.png"
                            className="h-12 w-12 rounded-full"
                          />
                          <div>
                            <h6 className="text-base/none font-medium text-default-900 mb-2">
                              Madelyn Baptista
                            </h6>
                            <div className="flex gap-1.5">
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="relative px-12">
                          <div className="absolute -top-5 start-0">
                            <i
                              data-lucide="quote"
                              className="h-8 w-8 text-primary fill-primary rotate-180"
                            />
                          </div>
                          <div className="absolute -bottom-5 end-0">
                            <i
                              data-lucide="quote"
                              className="h-8 w-8 text-primary fill-primary"
                            />
                          </div>
                          <p className="text-base text-default-400 font-medium">
                            Food is the best. Besides the many and delicious
                            meals, the service is also very good, especially in
                            the very fast delivery. I highly recommend Food to
                            you.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end slide */}
                    <div className="swiper-slide">
                      <div className="relative cursor-pointer">
                        <div className="flex items-center gap-3 mb-12">
                          <img
                            src="assets/avatar1-25906796.png"
                            className="h-12 w-12 rounded-full"
                          />
                          <div>
                            <h6 className="text-base/none font-medium text-default-900 mb-2">
                              Marc Y. Sellers
                            </h6>
                            <div className="flex gap-1.5">
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="relative px-12">
                          <div className="absolute -top-5 start-0">
                            <i
                              data-lucide="quote"
                              className="h-8 w-8 text-primary fill-primary rotate-180"
                            />
                          </div>
                          <div className="absolute -bottom-5 end-0">
                            <i
                              data-lucide="quote"
                              className="h-8 w-8 text-primary fill-primary"
                            />
                          </div>
                          <p className="text-base text-default-400 font-medium">
                            Food is the best. Besides the many and delicious
                            meals, the service is also very good, especially in
                            the very fast delivery. I highly recommend Food to
                            you.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end slide */}
                    <div className="swiper-slide">
                      <div className="relative cursor-pointer">
                        <div className="flex items-center gap-3 mb-12">
                          <img
                            src="assets/avatar1-25906796.png"
                            className="h-12 w-12 rounded-full"
                          />
                          <div>
                            <h6 className="text-base/none font-medium text-default-900 mb-2">
                              Nancy C. Hunter
                            </h6>
                            <div className="flex gap-1.5">
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="relative px-12">
                          <div className="absolute -top-5 start-0">
                            <i
                              data-lucide="quote"
                              className="h-8 w-8 text-primary fill-primary rotate-180"
                            />
                          </div>
                          <div className="absolute -bottom-5 end-0">
                            <i
                              data-lucide="quote"
                              className="h-8 w-8 text-primary fill-primary"
                            />
                          </div>
                          <p className="text-base text-default-400 font-medium">
                            Food is the best. Besides the many and delicious
                            meals, the service is also very good, especially in
                            the very fast delivery. I highly recommend Food to
                            you.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end slide */}
                    <div className="swiper-slide">
                      <div className="relative cursor-pointer">
                        <div className="flex items-center gap-3 mb-12">
                          <img
                            src="assets/avatar1-25906796.png"
                            className="h-12 w-12 rounded-full"
                          />
                          <div>
                            <h6 className="text-base/none font-medium text-default-900 mb-2">
                              Jeannette C. Siebert
                            </h6>
                            <div className="flex gap-1.5">
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                              <button>
                                <i
                                  data-lucide="star"
                                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="relative px-12">
                          <div className="absolute -top-5 start-0">
                            <i
                              data-lucide="quote"
                              className="h-8 w-8 text-primary fill-primary rotate-180"
                            />
                          </div>
                          <div className="absolute -bottom-5 end-0">
                            <i
                              data-lucide="quote"
                              className="h-8 w-8 text-primary fill-primary"
                            />
                          </div>
                          <p className="text-base text-default-400 font-medium">
                            Food is the best. Besides the many and delicious
                            meals, the service is also very good, especially in
                            the very fast delivery. I highly recommend Food to
                            you.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end slide */}
                  </div>
                </div>
                <div className="swiper h-24 clients-testimonial-pagination relative !mt-6">
                  <div className="swiper-wrapper ps-12 !py-6 space-x-2">
                    <div className="swiper-slide cursor-pointer !w-12 !h-12">
                      <img
                        src="assets/avatar1-25906796.png"
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div className="swiper-slide cursor-pointer !w-12 !h-12">
                      <img
                        src="assets/avatar2-189b0d01.png"
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div className="swiper-slide cursor-pointer !w-12 !h-12">
                      <img
                        src="assets/avatar3-2bbdc0fd.png"
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div className="swiper-slide cursor-pointer !w-12 !h-12">
                      <img
                        src="assets/avatar4-85475652.png"
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Section */}
      <section className="lg:py-28 py-10 relative bg-no-repeat bg-cover bg-[url(../images/home/offer-bg.png)]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container">
          <div className="relative lg:w-1/2 w-full">
            <h4 className="font-handrawn text-2xl text-yellow-500 mb-6">
              Special Combo Offer
            </h4>
            <h2 className="text-4xl font-semibold text-white mb-8">
              We make best Food in your town
            </h2>
            <p className="text-base text-white/75 max-w-2xl mb-10">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="inline-flex flex-wrap items-center justify-center gap-4">
              <a
                href="javascript:void(0)"
                className="py-4 px-10 font-medium text-white bg-primary rounded-full hover:bg-primary-500 transition-all"
              >
                Get started
              </a>
              <h4 className="text-yellow-400 font-medium text-2xl">
                $23.47
                <span className="text-lg line-through text-white/75">
                  $44.99
                </span>
              </h4>
            </div>
            <div className="absolute end-0 lg:-bottom-16 bottom-10">
              <img
                src="assets/offer-popup-78034aee.svg"
                className="lg:w-auto w-20"
              />
            </div>
          </div>
        </div>
        {/* end container */}
      </section>
      {/* Download App Section */}
    </div>
  );
};

export default HomePage;
