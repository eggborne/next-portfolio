import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Mike Donovan | Full-Stack Web Developer",
};

export default function Home() {
  
  return (
    <section className={styles.home}>
      <div className={styles.intro}>
        <h1></h1>
        <p>I'm Mike Donovan, a full-stack developer dedicated to building high-quality web applications.</p>
        <br />
        <p>Explore my projects and let's get in touch!</p>
      </div>

      <div className={styles.sectionLinks}>        
        <div className={styles.linkCard}>
          <h2>Projects</h2>
          <p>See what I’ve been working on lately.</p>
          <Link href="/projects" className={styles.linkButton}>View Projects</Link>
        </div>

        <div className={styles.linkCard}>
          <h2>Contact</h2>
          <p>Interested in working together? Get in touch!</p>
          <Link href="/contact" className={styles.linkButton}>Contact Me</Link>
        </div>
      </div>
    </section>

  );
}
