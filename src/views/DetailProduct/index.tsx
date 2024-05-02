import React from "react";
import { ProductType } from "@/types/product.type";
import styles from "./DetailProduct.module.scss";

const DetailProductView = ({ product }: { product: ProductType }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Product</h1>
      <div className={styles.detailProduct}>
        <div className={styles.detailProduct__img}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.detailProduct__name}>{product.name}</h4>
        <p className={styles.detailProduct__category}>{product.category}</p>
        <p className={styles.detailProduct__price}>
          {product.price
            ? new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(product.price)
            : " "}
        </p>
      </div>
    </>
  );
};

export default DetailProductView;
