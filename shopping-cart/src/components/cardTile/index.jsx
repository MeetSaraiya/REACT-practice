import { Fragment, useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

function CartTile({ singleCartItem }) {
  const { addToCart , removeFromCart } =
    useContext(ProductContext);

  return (
    <Fragment>
      <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              src={singleCartItem?.thumbnail}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              {singleCartItem?.title}
            </h3>
            <button
              onClick={() => removeFromCart(singleCartItem?.id,true)}
              className="text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              REMOVE
            </button>
          </div>
        </div>
        <div className="ml-auto">
        <h3 className="text-lg font-bold text-white">
            Price : ${singleCartItem?.price}
          </h3>
          <h3 className="text-lg font-bold text-white">
           Total Price : ${singleCartItem?.totalPrice}
          </h3>
          <p className="mt-2 mb-3 font-bolf text-[16px]">
            Quantity: {singleCartItem?.quantity}
          </p>
          <div className="mt-3 flex gap-3">
            <button
              onClick={() => removeFromCart(singleCartItem?.id,false)}
              className="disabled:opacity-65 border border-[#fff] w-[50px]"
              disabled={singleCartItem?.quantity === 1}
            >
              -
            </button>
            <button
              onClick={() => addToCart(singleCartItem , true)}
              className="border border-[#f3f3f3ec] w-[50px]"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500" />
    </Fragment>
  );
}

export default CartTile;