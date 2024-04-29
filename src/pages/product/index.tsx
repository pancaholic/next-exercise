import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";


const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [product, setProduct] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  // useEffect(() => {
  //   fetch("api/product")
  //     .then((res) => res.json())
  //     .then((allData) => {
  //       setProduct(allData.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
