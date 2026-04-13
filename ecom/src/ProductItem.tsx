import { Product } from "./lib/useData";
import { useCart } from "./lib/useCart";

export default function ProductCard({ product }: { product: Product }) {
  const { setProducts } = useCart();

  function addToCart() {
    setProducts((currentProducts) => [...currentProducts, product]);
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="mt-4">
        <img className="h-40" src={product.image} alt={product.title} />
      </figure>
      <div className="card-body">
        <span className="badge badge-xs badge-warning">{product.category}</span>
        <h2 className="card-title">{product.title}</h2>
        <p className="line-clamp-5">{product.description}</p>
        <div className="card-actions justify-between items-baseline">
          <span className="text-xl">{formattedPrice}</span>
          <button className="btn btn-primary" onClick={addToCart}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
