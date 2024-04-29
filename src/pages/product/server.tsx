import ProductView from "@/views/Product";
import React from "react";
import { ProductType } from "./product.type";

const ProductPage = (props: {products: ProductType[]}) => {
    const {products} = props
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

// Dipanggil setiap request
export async function getServerSideProps() {
  // fetch data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();
  console.log(response);

  return {
    props: {
        products: response.data
    }
  }
}
