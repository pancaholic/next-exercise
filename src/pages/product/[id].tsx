import React from "react";
import { useRouter } from "next/router";

const DetailProductPage = () => {
  const {query} = useRouter();
  
  return (
    <div>
      <h1>Detailed Product Page</h1>
      <p>Product: {query.id} </p>
    </div>
  );
};

export default DetailProductPage;
