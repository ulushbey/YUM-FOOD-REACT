import React from "react";
import ProductCard from "components/ProductCard";
import { Product } from "lib/types/product";
import { useAppSelector } from "store/store";
const ProductsList = ({ products }: { products: Product[] }) => {
  const cartProducts = useAppSelector((state) => state.cart.products);

  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          isInCart={!!cartProducts.find((item) => item._id === product._id)}
        />
      ))}
    </div>
  );
};

export default ProductsList;
