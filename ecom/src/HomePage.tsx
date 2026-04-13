import ProductItem from "./ProductItem";
import { fetchProducts, useData } from "./lib/useData";

export default function HomePage() {
  const { data, error, loading } = useData(fetchProducts);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
