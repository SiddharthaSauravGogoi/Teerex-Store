import { Product, CartItem } from "@/types";
import React, { FC, useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import ToastMessage from "../toast-message";

const ProductItem: FC<Product> = (product) => {
  const [toastMessage, setToastMessage] = useState(false);
  const addToCart = (product: Product) => {
    const cartItems = JSON.parse(
      localStorage.getItem("teerex-cart") || "[]"
    ) as CartItem[];
    if (!cartItems) {
      localStorage.setItem("teerex-cart", "[]");
    }
    let existingItem = cartItems.find((item) => product.id === item.id);
    if (existingItem) {
      updateExistingProducts(existingItem, cartItems);
    } else {
      addNewProduct(product, cartItems);
    }
  };

  const updateExistingProducts = (
    existingItem: CartItem,
    cartItems: CartItem[]
  ) => {
    if (existingItem.quantity === product.quantity) {
      alert("Cannot add more than available quatity");
      return;
    }
    existingItem.quantity += 1;
    existingItem.price += product.price;
    let filterOutItems = cartItems.filter((item) => item.id !== product.id);
    filterOutItems.push(existingItem);
    localStorage.setItem("teerex-cart", JSON.stringify(filterOutItems));
    showToastMessage();
  };

  const addNewProduct = (product: Product, cartItems: CartItem[]) => {
    const productCopy: CartItem = {
      ...product,
      maxQuantity: product.quantity,
      actualPrice: product.price,
    };
    productCopy.quantity = 1;
    const newItems = [...cartItems, productCopy];
    localStorage.setItem("teerex-cart", JSON.stringify(newItems));
    showToastMessage();
  };

  const showToastMessage = () => {
    setToastMessage(true);
    setTimeout(() => {
      setToastMessage(false);
    }, 2000);
  };

  return (
    <div className={styles.product}>
      <Image
        src={product.imageURL}
        alt={`${product.name}`}
        width={200}
        height={200}
      />
      <p>{product.name}</p>
      <div className={styles.product_description}>
        <p>
          {product.currency}&nbsp;
          {product.price}
        </p>
        <button className={styles.btn} onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </div>
      {toastMessage && <ToastMessage productName={product.name} />}
    </div>
  );
};

export default ProductItem;
