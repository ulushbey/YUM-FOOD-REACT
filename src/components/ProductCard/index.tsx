import { serverApi } from "lib/config";
import { Product } from "lib/types/product";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addCartProduct } from "store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "store/store";

type iProps = {
  product: Product;
  isInCart: boolean;
};
const ProductCard = ({ product, isInCart }: iProps) => {
  const [qty, setQty] = useState(1);

  const increment = () => setQty(qty + 1);
  const decrement = () => setQty(qty - 1);

  const dispatch = useAppDispatch();

  const addToCart = (item: Product) => {
    dispatch(
      addCartProduct({
        ...item,
        qty: qty,
      })
    );

    setQty(1);
  };

  return (
    <div className="order-3 border border-default-200 rounded-lg p-4 overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300">
      <div className="relative rounded-lg overflow-hidden divide-y divide-default-200 group">
        <div className="mb-4 mx-auto h-52">
          <img
            className="w-full h-full group-hover:scale-105 transition-all"
            src={`${serverApi}/${product.productImages[0]}`}
          />
        </div>
        <div className="pt-2">
          <div className="flex items-center justify-between mb-4">
            <Link
              className="text-default-800 text-xl font-semibold line-clamp-1 after:absolute after:inset-0"
              to="sdfasdfproduct-detail.html"
            >
              {product.productName}
            </Link>
            <i
              className="h-6 w-6 text-default-200 cursor-pointer hover:text-red-500 hover:fill-red-500 transition-all relative z-10"
              data-lucide="heart"
            />
          </div>
          <span className="inline-flex items-center gap-2 mb-4">
            <span className="bg-primary rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-3 w-3 text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <span className="text-sm text-default-950 from-inherit">
              {product.productViews}
            </span>
          </span>
          <div className="flex items-end justify-between mb-4">
            <h4 className="font-semibold text-xl text-default-900">
              ${product.productPrice}
            </h4>
            <div className="relative z-10 inline-flex justify-between border border-default-200 p-1 rounded-full">
              <button
                disabled={qty === 1}
                onClick={decrement}
                className="minus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-6 w-6 text-sm inline-flex items-center justify-center"
                type="button"
              >
                –
              </button>
              <span className="w-8 border-0 text-sm text-center text-default-800 focus:ring-0 p-0 bg-transparent">
                {qty}
              </span>
              <button
                onClick={increment}
                className="plus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-6 w-6 text-sm inline-flex items-center justify-center"
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <button
            disabled={isInCart}
            onClick={() => addToCart(product)}
            className={`relative z-10 w-full inline-flex items-center justify-center rounded-full border border-primary ${
              isInCart ? "bg-yellow-400" : "bg-primary"
            } px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-500 hover:bg-primary-500`}
          >
            {isInCart ? "In Cart" : "Add to cart"}
          </button>
          {/* end btn */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
