import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [singleProduct, setSingleProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Updated productList :", productList);
  }, [productList]);

  async function fetchProductAsync() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setProductList(data.products);
      // console.log(productList);
    } catch (err) {
      setError(err);
      console.time("error time");
      console.error(err);
    }
  }

  function addToCart(cartItem , flag = false) {
    let cpyList = [...(cart || [])];
    const idx = cpyList.findIndex((item) => item?.id === cartItem?.id);
    console.info("cart item :-> ", idx);

    if (idx === -1) {
      console.log("if part , line :: 41");
      cpyList.push({
        ...cartItem,
        quantity : 1,
        totalPrice : cartItem?.price,
      });
    } else {
      console.log("else part , line :: 48");

      cpyList[idx] = {
        ...cpyList[idx],
        quantity: cpyList[idx]?.quantity + 1,
        totalPrice: (cpyList[idx]?.quantity + 1) * cartItem?.price,
      };
    }

    console.log("existing cart ", cpyList);
    setCart(cpyList);
    localStorage.setItem("cartItems", JSON.stringify(cpyList));

    if(flag){
      navigate("/cart-list")
    }
    
  }



  function removeFromCart(currentId, removeFromListCompletely = false) {
    let cpyList = [...(cart || [])];
    console.log(currentId, removeFromListCompletely);
    let idx = cpyList.findIndex((val)=>val.id === currentId);
    if(removeFromListCompletely && (idx !== -1)){
      console.log("idx ",idx);
      cpyList.splice(idx,1);
    }else{
      cpyList[idx]= {
        ...cpyList[idx],
        quantity : cpyList[idx].quantity - 1,
        totalPrice : (cpyList[idx].quantity - 1)*(cpyList[idx].price)
      }
    }


    console.log("existing cart ", cpyList);
    setCart(cpyList);
    localStorage.setItem("cartItems", JSON.stringify(cpyList));
  }

  useEffect(() => {
    fetchProductAsync();
    setCart(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);
  
  useEffect(() => {
    console.log("cart changed ", cart);
    
  }, [cart]);


  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        loading,
        setLoading,
        error,
        setError,
        setSingleProduct,
        singleProduct,
        cart,
        setCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
