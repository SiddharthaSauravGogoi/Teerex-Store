import React, { FC } from "react";
import styles from "./style.module.css";

interface Props {
  productName: string;
}

const ToastMessage: FC<Props> = ({ productName }) => {
  return <div className={styles.toast}>{productName} added to cart</div>;
};

export default ToastMessage;
