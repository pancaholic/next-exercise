import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
import DetailProductView from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();
  // CLIENT SIDE RENDERING
  // const { data, error, isLoading } = useSWR(`/api/product/${query.id}`, fetcher);

  return (
    <div>
      {/* CLIENT SIDE RENDERING */}
      {/* <DetailProductView product={isLoading ? [] : data.data}/> */}
      {/* SERVER SIDE RENDERING */}
      <DetailProductView product={product} />
    </div>
  );
};

export default DetailProductPage;

// SERVER SIDE RENDERING
export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  // fetch data
  const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
