import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import style from "./style.module.css";
import CartImage from "@/assets/cart.png";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={style.nav}>
      <h3>Teerex Store</h3>
      <ul>
        {router.pathname === "/cart" && (
          <li>
            <Link href="/">Homepage</Link>
          </li>
        )}
        <li>
          <Link href="/cart">
            <Image src={CartImage} alt="shopping-cart" height={20} width={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
