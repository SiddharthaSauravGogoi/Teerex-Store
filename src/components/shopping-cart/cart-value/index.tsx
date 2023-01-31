import React, { FC } from "react";
import styles from "../style.module.css";

interface Props {
  totalCartValue: number;
}

const CartValue: FC<Props> = ({ totalCartValue }) => {
  return (
    <div className={styles.cart_value}>
      {totalCartValue === 0
        ? "No items added to cart"
        : `Cart Value: ${totalCartValue}`}
    </div>
  );
};

export default CartValue;
