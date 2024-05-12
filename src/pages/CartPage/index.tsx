import Breadcrumb from "components/Breadcrumb";
import CartProductCard from "components/CartProductCard";
import { Product } from "lib/types/product";
import React, { useContext } from "react";
import { useAppSelector } from "store/store";
import CartDetials from "components/CartDetails";
import { Link } from "react-router-dom";
const CartPage = () => {
  const products: Product[] = useAppSelector((state) => state.cart.products);
  return (
    <div>
      <Breadcrumb />
      <section className="lg:py-10 py-6">
        <div className="container">
          {products.length ? (
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
              <div className="lg:col-span-2 col-span-1">
                <div className="border border-default-200 rounded-lg">
                  <div className="border-b border-default-200 px-6 py-5">
                    <h4 className="text-lg font-medium text-default-800">
                      Shopping Cart
                    </h4>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <div className="-m-1.5 overflow-x-auto">
                      <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                          <table className="min-w-full divide-y divide-default-200">
                            <thead className="bg-default-400/10">
                              <tr>
                                <th
                                  scope="col"
                                  className="min-w-[14rem] px-5 py-3 text-start text-xs font-medium text-default-500 uppercase"
                                >
                                  Products
                                </th>
                                <th
                                  scope="col"
                                  className="px-5 py-3 text-start text-xs font-medium text-default-500 uppercase"
                                >
                                  Price
                                </th>
                                <th
                                  scope="col"
                                  className="px-5 py-3 text-start text-xs font-medium text-default-500 uppercase"
                                >
                                  Quantity
                                </th>
                                <th
                                  scope="col"
                                  className="px-5 py-3 text-center text-xs font-medium text-default-500 uppercase"
                                >
                                  Sub-Total
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-default-200">
                              {products.map((product) => (
                                <CartProductCard
                                  key={product._id}
                                  product={product}
                                />
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-default-200 px-6 py-5">
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <Link
                        to="/products"
                        className="inline-flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 text-center text-sm font-medium shadow-sm transition-all duration-500"
                      >
                        Return to Shop
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <CartDetials />
                <div className="border border-default-200 rounded-lg">
                  <div className="px-6 py-5 border-b border-default-200">
                    <h4 className="text-lg font-semibold text-default-800">
                      Coupon Code
                    </h4>
                  </div>
                  <div className="p-6">
                    <input
                      id="LoggingEmailAddress"
                      className="block w-full bg-transparent rounded-full py-2.5 px-4 border border-default-200"
                      type="text"
                      placeholder="Enter Coupon Code"
                    />
                    <div className="flex justify-end mt-4">
                      <button className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-500 hover:bg-primary-500">
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center ">
              No products here. Return to{" "}
              <Link
                style={{ color: "blue" }}
                className="underline"
                to="/products"
              >
                Shopping
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartPage;
