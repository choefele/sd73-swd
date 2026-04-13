import { useState, ReactNode } from "react";
import { CartContext } from "./useCart";
import { Product } from "./useData";

export default function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <CartContext value={{ products, setProducts }}>{children}</CartContext>
  );
}
