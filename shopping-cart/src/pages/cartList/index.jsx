import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom"; // Uncomment and use navigate
import CartTile from "../../components/cardTile";

export const CartList = () => {
  const { cart } = useContext(ProductContext);
  const navigate = useNavigate(); // Ensure navigate is used properly

  return (
    <div className="max-w-5xl mx-auto py-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        My Cart Page
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {/* Cart Items Section */}
        <div className="md:col-span-2 space-y-4">
          {cart?.length ? (
            cart.map((singleCartItem, index) => (
              <CartTile key={index} singleCartItem={singleCartItem} />
            ))
          ) : (
            <h1 className="text-center text-gray-600 italic">
              No items available in cart! Please add some items.
            </h1>
          )}
        </div>

        {/* Order Summary Section */}
        <div className="bg-gray-100 rounded-sm p-4 h-max">
          <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">
            Order Summary
          </h3>
          <ul className="text-gray-700 mt-4 space-y-2">
            <p className="flex flex-wrap gap-4 text-sm font-bold">
              Total{" "}
              <span>
                ${" "}
                {cart?.length
                  ? cart
                      .reduce((acc, curr) => acc + (curr?.totalPrice || 0), 0)
                      .toFixed(2)
                  : "0.00"}
              </span>
            </p>
          </ul>
          <div className="mt-5 flex gap-2">
            <button
              disabled={cart.length === 0}
              className="disabled:opacity-60 text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              Checkout
            </button>
            <button
              onClick={() => navigate("/")}
              className="text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
