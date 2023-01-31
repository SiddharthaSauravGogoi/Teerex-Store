import Products from "@/components/product";
import Sidebar from "@/components/sidebar";
import styles from "@/styles/base.module.css";
import { Product } from "@/types";
import React, { FC, useState, MouseEvent } from "react";
import {
  genericFilterHandler,
  handlePriceFilter,
  removeOptionFromFilter,
} from "./helper";

interface Props {
  products: Product[];
  query: string;
  mobileFilter: boolean;
}

const Main: FC<Props> = ({ products, query, mobileFilter }) => {
  const [color, setColor] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const [gender, setGender] = useState<string[]>([]);
  const [price, setPrice] = useState<string[]>([]);

  const handleFilterChange = (event: MouseEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    const category = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;

    if (isChecked) {
      switch (category) {
        case "gender":
          setGender([...gender, value]);
          break;
        case "type":
          setType([...type, value]);
          break;
        case "price":
          setPrice([...price, value]);
          break;
        case "color":
          setColor([...color, value]);
          break;
      }
    } else {
      switch (category) {
        case "gender":
          setGender(removeOptionFromFilter(gender, value));
          break;
        case "type":
          setType(removeOptionFromFilter(type, value));
          break;
        case "price":
          setPrice(removeOptionFromFilter(price, value));
          break;
        case "color":
          setColor(removeOptionFromFilter(color, value));
          break;
      }
    }
  };

  const handleFilter = (
    state: string[],
    product: Product,
    category: string
  ) => {
    if (!state.length) {
      return product;
    } else {
      switch (category) {
        case "gender":
          return genericFilterHandler(gender, product, "gender");
        case "type":
          return genericFilterHandler(type, product, "type");
        case "price":
          return handlePriceFilter(price, product);
        case "color":
          return genericFilterHandler(color, product, "color");
        default:
          return product;
      }
    }
  };

  const filteredProducts = (products: Product[]) => {
    return products
      .filter((product) => {
        if (query === "") {
          return product;
        } else if (
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.color.toLowerCase().includes(query.toLowerCase()) ||
          product.type.toLowerCase().includes(query.toLowerCase())
        ) {
          return product;
        }
      })
      .filter((product) => {
        return handleFilter(color, product, "color");
      })
      .filter((product) => {
        return handleFilter(gender, product, "gender");
      })
      .filter((product) => {
        return handleFilter(type, product, "type");
      })
      .filter((product) => {
        return handleFilter(price, product, "price");
      });
  };

  return (
    <main className={styles.main}>
      <Sidebar
        products={products}
        handleFilterChange={handleFilterChange}
        mobileFilter={mobileFilter}
      />
      <div className={styles.products}>
        {filteredProducts(products).map((product) => (
          <Products {...product} key={product.id} />
        ))}
      </div>
    </main>
  );
};

export default Main;
