import { useQuery, useQueryClient } from "react-query";
import { getAllProducts } from "../pages/api/productsApi";
export default function ProductList() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    error,
    data: products,
  } = useQuery("products", getAllProducts, {});

  console.log(isError, isLoading, products?.rows);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (Array.isArray(products?.rows)) {
    content = products?.rows?.map((item: any, i: number) => {
      return <div key={i}>{item?.productName}</div>;
    });
  }
  if (isError) {
    content = <p>There was an Error</p>;
  }
  return <> {content}</>;
}
