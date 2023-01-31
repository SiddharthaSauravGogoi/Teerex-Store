import React, { useEffect, useState } from "react";
import { CartItem } from "@/types";
import styles from "./style.module.css";
import CartItems from "./cart-items";
import CartValue from "./cart-value";

const ShoppingCard = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalCartValue, setTotalCartValue] = useState<number>(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("teerex-cart") || "[]");
    setCart(cartItems);
    const result = handleCartValue(cartItems);
    setTotalCartValue(result);
  }, []);

  const handleItemIncrease = (cartItem: CartItem) => {
    if (cartItem.quantity === cartItem.maxQuantity) {
      alert("Cannot add more than available quantity");
      return;
    }
    cartItem.quantity += 1;
    cartItem.price += cartItem.actualPrice;
    let updatedItems = cart.filter((item) => item.id !== cartItem.id);
    updatedItems.push(cartItem);
    const result = handleCartValue(updatedItems);
    setTotalCartValue(result);
    setCart(updatedItems);
    localStorage.setItem("teerex-cart", JSON.stringify(updatedItems));
  };

  const handleItemDecrease = (cartItem: CartItem) => {
    cartItem.price -= cartItem.actualPrice;
    cartItem.quantity -= 1;
    let updatedItems: CartItem[] = [];
    if (cartItem.quantity <= 0) {
      updatedItems = cart.filter((item) => item.id !== cartItem.id);
    } else {
      updatedItems = cart.filter((item) => item.id !== cartItem.id);
      updatedItems.push(cartItem);
    }
    const result = handleCartValue(updatedItems);
    setTotalCartValue(result);
    setCart(updatedItems);
    localStorage.setItem("teerex-cart", JSON.stringify(updatedItems));
  };

  const handleItemDelete = (cartItem: CartItem) => {
    let updatedItems = cart.filter((item) => item.id !== cartItem.id);
    const result = handleCartValue(updatedItems);
    setTotalCartValue(result);
    setCart(updatedItems);
  };

  const handleCartValue = (cartItems: CartItem[]) => {
    const result = cartItems.reduce(function (acc: number, obj: CartItem) {
      return acc + obj.price;
    }, 0);
    return result;
  };

  return (
    <div className={styles.cart_container}>
      <CartItems
        cart={cart}
        handleItemDecrease={handleItemDecrease}
        handleItemIncrease={handleItemIncrease}
        handleItemDelete={handleItemDelete}
      />
      <CartValue totalCartValue={totalCartValue} />
    </div>
  );
};

export default ShoppingCard;
