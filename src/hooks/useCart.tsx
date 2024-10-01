/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from "react";
// import { api } from "../services/api";

interface Plate {
  id: number;
  img: string;
  name: string;
  price: number;
}
interface PurchasedPlate {
  plate: Plate;
  quantityPurchased: number;
}

interface CartContextProps {
  cart: PurchasedPlate[];
  addPlate: (order: PurchasedPlate) => void;
  deletePlate: (id: number) => void;
  getTotalPlatesInCart: () => number;
  getTotalPrice: () => number;
  setPaymentStatusInformation: (status: boolean) => void;
  getPaymentStatusInformation: () => boolean;
  cleanOrder: () => void;
}
const CartContext = createContext({} as CartContextProps);

function CartProvider({ children }) {
  const [cart, setCart] = useState<PurchasedPlate[]>([]);
  const [isPaid, setIsPaid] = useState(false);

  function addPlate(order: PurchasedPlate) {
    const { plate, quantityPurchased } = order;
    const hasPlate = cart.find((item) => item.plate.id === plate.id);

    if (hasPlate) {
      setCart((prevState) =>
        prevState.map((plateOrder) => {
          if (plateOrder.plate.id === plate.id) {
            return {
              ...plateOrder,
              quantityPurchased:
                plateOrder.quantityPurchased + quantityPurchased,
            };
          }
          return plateOrder;
        })
      );
      localStorage.setItem("@foodexplorer:cart", JSON.stringify(cart));
      return;
    }

    setCart((prevState) => [...prevState, order]);
  }

  function deletePlate(id: number) {
    const filteredCart = cart.filter((item) => item.plate.id !== id);

    setCart(filteredCart);
  }

  function getTotalPlatesInCart() {
    const numberOfPlates = cart.reduce(
      (acc, currentValue) => acc + currentValue.quantityPurchased,
      0
    );

    return numberOfPlates;
  }

  function getTotalPrice() {
    const totalPrice = cart.reduce((acc, currentValue) => {
      return acc + currentValue.plate.price * currentValue.quantityPurchased;
    }, 0);
    return totalPrice;
  }

  function setPaymentStatusInformation(status: boolean) {
    setIsPaid(status);
  }

  function getPaymentStatusInformation() {
    return isPaid;
  }

  function cleanOrder() {
    setCart([]);
    setIsPaid(false);
  }

  useEffect(() => {
    const storedCart = localStorage.getItem("@foodexplorer:cart");

    if (storedCart) {
      try {
        const parsedState = JSON.parse(storedCart);
        setCart(parsedState);
      } catch {
        localStorage.removeItem("@foodexplorer:cart");
      }
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("@foodexplorer:cart", JSON.stringify(cart));
      return;
    }

    localStorage.removeItem("@foodexplorer:cart");
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addPlate,
        deletePlate,
        getTotalPlatesInCart,
        getTotalPrice,
        setPaymentStatusInformation,
        getPaymentStatusInformation,
        cleanOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
