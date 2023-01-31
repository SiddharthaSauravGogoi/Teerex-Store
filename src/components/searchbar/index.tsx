import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./style.module.css";
import filters from "@/assets/filter.png";
import Image from "next/image";

interface Props {
  query: string;
  setQuery: (query: string) => void;
  showMobileFilters: Dispatch<SetStateAction<boolean>>;
}

const Searchbar: FC<Props> = ({ query, setQuery, showMobileFilters }) => {
  return (
    <div className={styles.searchbar_wrapper}>
      <input
        value={query}
        type="text"
        className={styles.input}
        placeholder="Search items"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles.mobile_filter}>
        <Image
          src={filters}
          alt="filters"
          height={30}
          width={30}
          onClick={() => showMobileFilters((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default Searchbar;
