import React from "react";
import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Shop Page</h1>
      {
        query.product ? <p>Product: {query.product[0]} - {query.product[1]}</p> : ""
      }
     
    </div>
  );
};

export default ShopPage;
