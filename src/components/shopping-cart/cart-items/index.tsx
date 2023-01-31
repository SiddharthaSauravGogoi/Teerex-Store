import React, { FC } from "react";
import Image from "next/image";
import { CartItem } from "@/types";
import styles from "../style.module.css";

interface Props {
  cart: CartItem[];
  handleItemDecrease: (cartItem: CartItem) => void;
  handleItemIncrease: (cartItem: CartItem) => void;
  handleItemDelete: (cartItem: CartItem) => void;
}

const CartItems: FC<Props> = ({
  cart,
  handleItemIncrease,
  handleItemDecrease,
  handleItemDelete,
}) => {
  return (
    <>
      {cart.map((cartItem) => (
        <div className={styles.cart} key={cartItem.id}>
          <Image
            src={cartItem.imageURL}
            alt={`cartItem-${cartItem.name}-image`}
            width={50}
            height={50}
          />
          <div className={styles.cart_item_info}>
            <p> Name: {cartItem.name}</p>
            <p>Price: {cartItem.price} </p>
          </div>
          <div className={styles.cart_item_quantity}>
            <button
              className={styles.btn_rounded}
              onClick={() => handleItemIncrease(cartItem)}
            >
              +
            </button>
            {cartItem.quantity}
            <button
              className={styles.btn_rounded}
              onClick={() => handleItemDecrease(cartItem)}
            >
              -
            </button>
          </div>
          <button
            className={styles.btn_remove}
            onClick={() => handleItemDelete(cartItem)}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default CartItems;
