import { serverApi } from "lib/config";
import React from "react";
import { useAppSelector } from "store/store";

const OrderSummary = () => {
  const products = useAppSelector((state) => state.cart.products);
  const deliveryFee = useAppSelector((state) => state.cart.deliveryFee);
  const discount = useAppSelector((state) => state.cart.discount);
  const subTotal = useAppSelector((state) => state.cart.products)
    .map((item) => item.qty! * item.productPrice)
    .reduce((a, b) => a + b, 0);
  return (
    <div className="border border-default-200 rounded-lg p-5">
      <h4 className="text-lg font-semibold text-default-700 mb-5">
        Order Summary
      </h4>
      {products.map((item) => (
        <div key={item._id} className="flex items-center mb-4">
          <img
            src={`${serverApi}/${item.productImages[0]}`}
            className="h-20 w-20 me-4"
          />
          <div>
            <h4 className="text-sm text-default-600 mb-2">
              {item.productName}
            </h4>
            <h4 className="text-sm text-default-400">
              {item.qty} x{" "}
              <span className="text-primary font-semibold">
                ${item.productPrice}
              </span>
            </h4>
          </div>
        </div>
      ))}

      <div className="mb-6">
        <div className="flex justify-between mb-3">
          <p className="text-sm text-default-500">Sub-total</p>
          <p className="text-sm text-default-700 font-medium">${subTotal}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="text-sm text-default-500">Shipping</p>
          <p className="text-sm text-default-700 font-medium">
            {deliveryFee === 0 ? "Free" : deliveryFee}
          </p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="text-sm text-default-500">Discount</p>
          <p className="text-sm text-default-700 font-medium">${discount}</p>
        </div>

        <div className="border-b border-default-200 my-4" />
        <div className="flex justify-between mb-3">
          <p className="text-base text-default-700">Total</p>
          <p className="text-base text-default-700 font-medium">
            {" "}
            $ {subTotal + deliveryFee - discount} USD
          </p>
        </div>
      </div>
      <button className="w-full inline-flex items-center justify-center rounded-full border border-primary bg-primary px-10 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-500 hover:bg-primary-500">
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
