import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import NoProductFound from "../NoProductFound";
import SortInput from "./SortInput";
import ProductCard from "./ProductCard";
import CartSidebar from "../Cart/CartSidebar";

const ProductGrid = () => {
  const { productList } = useProductContext();

  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <SortInput />
          <div className="product-grid">
            {productList.length > 0 ? (
              productList.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            ) : (
              <NoProductFound />
            )}
          </div>
        </div>
        <CartSidebar />
      </div>
    </main>
  );
};

export default ProductGrid;
