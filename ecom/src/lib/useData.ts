import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
};

async function fetchProducts(signal: AbortSignal): Promise<Product[]> {
  const result = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    signal,
  });

  if (!result.ok) {
    throw new Error(`Request failed: ${result.status} ${result.statusText}`);
  }

  return result.json();
}

function useData<T>(fetchData: (signal: AbortSignal) => Promise<T>) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setLoading(true);

      try {
        const response = await fetchData(controller.signal);
        setData(response);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [fetchData]);

  return { data, error, loading };
}

export { useData, fetchProducts, type Product };
