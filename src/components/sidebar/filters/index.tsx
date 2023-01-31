import React, { FC, MouseEvent } from "react";
import styles from "../style.module.css";

interface Props {
  filters: Record<string, any>;
  handleFilterChange: (event: MouseEvent<HTMLInputElement>) => void;
  mobileFilter: boolean;
}

const Filters: FC<Props> = ({ filters, handleFilterChange, mobileFilter }) => {
  const filtesWithoutPriceRange = Object.keys(filters).filter(
    (cat) => cat !== "price"
  );
  const priceFilters: Record<string, any> = {
    "0-Rs250": 250,
    "Rs251-400": 251,
    "Rs450+": 450,
  };

  return (
    <>
      {filtesWithoutPriceRange.map((category, index) => (
        <div
          className={
            mobileFilter
              ? styles.sidebar_mobile_category
              : styles.sidebar_category
          }
          key={index}
        >
          <h3> {category} </h3>
          <div onClick={handleFilterChange}>
            {filters[category].map((cat: string, index: React.Key) => (
              <div key={index} className={styles.category_item}>
                <input
                  type="checkbox"
                  name={category}
                  value={cat}
                  className={styles.category_checkbox}
                />
                {cat}
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}
      <h3 className={styles.price_filter_heading}>Price Ranges</h3>
      {Object.keys(priceFilters).map((category, index) => (
        <div
          className={
            mobileFilter
              ? styles.sidebar_mobile_category
              : styles.sidebar_category
          }
          key={index}
        >
          <div onClick={handleFilterChange}>
            <div key={index} className={styles.category_item}>
              <input
                type="checkbox"
                name="price"
                value={category}
                className={styles.category_checkbox}
              />
              {category}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Filters;
