import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export const ProductDetails = () => {
  // const navigate = useNavigate();
  const { id } = useParams();
  const { setSingleProduct, singleProduct, loading, addToCart , error} = useContext(ProductContext);

  const [currentProduct , setCurrentProduct] = useState(null);

  useEffect(() => {
    console.log("Updated singleProduct:", singleProduct);
  }, [singleProduct]);
 
  async function fetchSingleProduct(idx) {
    try {
      console.log("use param id" , id);
      console.log("use idx -> " , idx);
      const res = await fetch(`https://dummyjson.com/products/${idx}`);
      if (res.ok) {
        const ans = await res.json();
        setSingleProduct(ans);
        setCurrentProduct(ans);
        console.log("ans ",ans);
        // console.log("singleProduct ",singleProduct);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  if (loading)
    return (
      <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
    );

  if (error) return <div>Error</div>;

  return (
    <Fragment>
      {/* Header */}
      <div className="text-3xl max-w-4xl mx-auto text-black mb-5 p-4 text-center bg-white shadow-lg rounded-lg overflow-hidden">
        Product Details
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Left Side: Images */}
        <div className="w-2/3 bg-gray-100 p-4">
          {/* Main Image */}
          <img
            className="w-full h-96 object-cover rounded-md mb-4"
            src={currentProduct?.thumbnail}
            alt={currentProduct?.title}
          />

          {/* Additional Images */}
          <div className="flex flex-row flex-wrap gap-2">
            {currentProduct?.images && currentProduct?.images.length > 0 ? (
              currentProduct?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="h-20 w-20 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                />
              ))
            ) : (
              <div className="text-gray-500 italic">
                No extra images available
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-1/3 p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {singleProduct?.title}
          </h2>
          <p className="text-gray-600 mt-2">{currentProduct?.description}</p>

          <div className="mt-4 flex justify-between items-center">
            <div className="text-lg font-semibold text-gray-900">
              ${currentProduct?.price}
            </div>
            <div className="text-sm text-gray-500">
              Rating: {currentProduct?.rating}
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <div>Brand: {currentProduct?.brand}</div>
            <div>Category: {currentProduct?.category}</div>
            {/* <div>Stock: {singleProduct?.stock} available</div>
            <div>Minimum Order: {singleProduct?.minimumOrderQuantity}</div> */}
            <div>Shipping: {currentProduct?.shippingInformation}</div>
            <div>Warranty: {currentProduct?.warrantyInformation}</div>
            <div>Return Policy: {currentProduct?.returnPolicy}</div>
          </div>

          <div className="mt-6">
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md"
              onClick={()=>addToCart(currentProduct , true)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
