import Breadcrumb from "components/Breadcrumb";
import Pagination from "components/Pagination";
import ProductCard from "components/ProductCard";
import FilterHeader from "containers/FilterHeader";
import FilterSidebar from "containers/FilterSidebar";
import ProductsList from "containers/ProductsList";
import { Product } from "lib/types/product";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GET_PRODUCTS } from "services/product.service";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "DISH";
  const order = searchParams.get("order") || "createdAt";
  const page = searchParams.get("page") || "1";

  useEffect(() => {
    console.log("category: ", category);
    getProducts(category, order, page);
  }, [searchParams]);

  const getProducts = async (category: string, order: string, page: string) => {
    const option = {
      category: category,
      order: order,
      page: Number(page),
    };
    const data = await GET_PRODUCTS(option);
    setProducts(data);
  };

  console.log("products: ", products);
  return (
    <>
      <Breadcrumb />
      <section className="lg:py-8 py-6">
        <div className="container">
          <div className="lg:flex gap-6">
            <FilterSidebar />
            <div className="lg:w-3/4">
              <FilterHeader />
              <ProductsList products={products} />
              {/* end grid */}
              <Pagination hasNext={products.length === 8} />
              {/* end flex */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
