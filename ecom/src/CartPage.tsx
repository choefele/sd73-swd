import CartItem from "./CartItem";
import { useCart } from "./lib/useCart";

export default function CartPage() {
  const { products } = useCart();

  const total = products.reduce((sum, product) => sum + product.price, 0);
  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(total);

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {products.length === 0 && (
        <li className="p-4 text-sm opacity-60">Your cart is empty.</li>
      )}

      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Total: {formattedTotal}
      </li>
    </ul>
  );
}
