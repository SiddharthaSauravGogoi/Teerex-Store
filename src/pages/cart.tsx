import React from "react";
import ShoppingCard from "@/components/shopping-cart";
import styles from "@/styles/base.module.css";
import PageHead from "@/components/page-head";

const Cart = () => {
  return (
    <div className={styles.container}>
      <PageHead title={"Teerex | Cart"} />
      <ShoppingCard />
    </div>
  );
};

export default Cart;
