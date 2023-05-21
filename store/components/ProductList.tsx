import { useQuery, useQueryClient } from "react-query";
import { getAllProducts } from "../pages/api/productsApi";
import Thumbnail from "../layouts/products/Thumbnail";
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
  return (
    <>
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:max-w-full lg:px-12">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>
    </>
  );
}
