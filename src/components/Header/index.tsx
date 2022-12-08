import { useContext } from "react";

import styles from "./styles.module.scss";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

import { AuthContext } from "../../contexts/AuthContext";
import Image from "next/image";

export function Header() {
  const { SignOut } = useContext(AuthContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image src="/logo.png" alt="logo" width={100} height={80} />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category">
            <p>Categoria</p>
          </Link>
          <Link href="/product">
            <p>Cardapio</p>
          </Link>
          <button onClick={SignOut}>
            <FiLogOut color="#fff" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
