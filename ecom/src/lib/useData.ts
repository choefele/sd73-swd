import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
};

async function fetchProducts(): Promise<Product[]> {
  const result = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (!result.ok) {
    throw new Error(`Request failed: ${result.status} ${result.statusText}`);
  }

  return result.json();
}

function useData() {
  const [data, setData] = useState<Product[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      setLoading(true);

      try {
        const reponse = await fetchProducts();
        if (!ignore) {
          setData(reponse);
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return { data, error, loading };
}

export { useData, type Product };
