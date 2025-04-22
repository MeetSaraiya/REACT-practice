
import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductTile from "../../components/productTile";

export const ProductList = () => {
  const { productList, loading, error } = useContext(ProductContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!productList || productList.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">
            Our Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {productList && productList.length > 0 ? (
            productList.map((singleProductTile) => (
              <ProductTile key={singleProductTile?.id} singleProductTile={singleProductTile} />
            ))
          ) : (
            <h3>No Products Found</h3>
          )}
        </div>
      </div>
    </section>
    </>
  );
};
