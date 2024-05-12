import { serverApi } from "lib/config";
import { Product } from "lib/types/product";
import React from "react";
import {
  decrementCartQty,
  incrementCartQty,
  removeCartProduct,
} from "store/slices/cartSlice";
import { useAppDispatch } from "store/store";

type iProp = {
  product: Product;
};
const CartProductCard = ({ product }: iProp) => {
  const dispatch = useAppDispatch();
  return (
    <tr>
      <td className="px-5 py-3 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <button onClick={() => dispatch(removeCartProduct(product._id))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              data-lucide="x-circle"
              className="lucide lucide-x-circle w-5 h-5 text-default-400"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m15 9-6 6"></path>
              <path d="m9 9 6 6"></path>
            </svg>
          </button>
          <img
            src={`${serverApi}/${product.productImages[0]}`}
            className="h-18 w-18"
          />
          <h4 className="text-sm font-medium text-default-800">
            {product.productName}
          </h4>
        </div>
      </td>
      <td className="px-5 py-3 whitespace-nowrap text-sm text-default-800">
        ${product.productPrice}
      </td>
      <td className="px-5 py-3 whitespace-nowrap">
        <div className="inline-flex justify-between items-center border border-default-200 p-1 rounded-full">
          <button
            disabled={product.qty === 1}
            onClick={() => dispatch(decrementCartQty(product._id))}
            type="button"
            className="minus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-6 w-6 text-sm inline-flex items-center justify-center"
          >
            –
          </button>
          <span className="w-8 border-0 text-sm text-center text-default-800 focus:ring-0 p-0 bg-transparent">
            {product.qty}
          </span>
          <button
            onClick={() => dispatch(incrementCartQty(product._id))}
            type="button"
            className="plus flex-shrink-0 bg-default-200 text-default-800 rounded-full h-6 w-6 text-sm inline-flex items-center justify-center"
          >
            +
          </button>
        </div>
      </td>
      <td className="px-5 py-3 whitespace-nowrap text-sm text-center text-default-800">
        ${product.productPrice * (product.qty ?? 1)}
      </td>
    </tr>
  );
};

export default CartProductCard;
