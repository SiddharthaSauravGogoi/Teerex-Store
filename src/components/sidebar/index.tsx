import { Product } from "@/types";
import React, { FC, MouseEvent } from "react";
import Filters from "./filters";
import styles from "./style.module.css";

interface Props {
  products: Product[];
  mobileFilter: boolean;
  handleFilterChange: (event: MouseEvent<HTMLInputElement>) => void;
}

const Sidebar: FC<Props> = ({ products, handleFilterChange, mobileFilter }) => {
  const filters: Record<string, any> = {
    gender: [],
    type: [],
    price: [],
    color: [],
  };

  const populateSideBar = () => {
    for (let i = 0; i < products.length; i++) {
      if (!filters.gender.includes(products[i].gender)) {
        filters.gender.push(products[i].gender);
      }
      if (!filters.type.includes(products[i].type)) {
        filters.type.push(products[i].type);
      }
      if (!filters.price.includes(products[i].price)) {
        filters.price.push(products[i].price);
      }
      if (!filters.color.includes(products[i].color)) {
        filters.color.push(products[i].color);
      }
    }
  };

  populateSideBar();

  return (
    <div className={styles.sidebar}>
      <Filters
        handleFilterChange={handleFilterChange}
        filters={filters}
        mobileFilter={mobileFilter}
      />
    </div>
  );
};

export default Sidebar;
