import Searchbar from "@/components/searchbar";
import Main from "@/components/main-content";
import styles from "@/styles/base.module.css";
import React, { FC, useState } from "react";
import { Product } from "@/types";
import PageHead from "@/components/page-head";

interface Products {
  products: Product[];
}

const App: FC<Products> = ({ products }) => {
  const [query, setQuery] = useState<string>("");
  const [mobileFilter, showMobileFilters] = useState<boolean>(false);
  return (
    <>
      <div className={styles.container}>
        <PageHead title={"Teerex"} />
        <Searchbar
          query={query}
          setQuery={setQuery}
          showMobileFilters={showMobileFilters}
        />
        <Main products={products} query={query} mobileFilter={mobileFilter} />
      </div>
    </>
  );
};

export default App;

export async function getServerSideProps() {
  const res = await fetch(
    `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
  );
  const products: Product[] = await res.json();
  return { props: { products } };
}
