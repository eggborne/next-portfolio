import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        header
      </header>
      <main className={styles.main}>
        main
      </main>
      <footer className={styles.footer}>
        <Link href='#'>
          footer
        </Link>
      </footer>
    </div>
  );
}
