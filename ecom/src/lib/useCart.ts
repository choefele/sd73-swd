import { use } from "react";
import { createContext } from "react";
import { Product } from "./useData";

export type CartContextValue = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

function useCart() {
  const context = use(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}

export { useCart, CartContext };
