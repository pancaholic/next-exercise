import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [product, setProduct] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  useEffect(() => {
    fetch("api/product")
      .then((res) => res.json())
      .then((allData) => {
        setProduct(allData.data);
      });
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {product.map((item: productType) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <p>{item.size}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
