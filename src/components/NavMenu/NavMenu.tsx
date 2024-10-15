import Link from "next/link";
import styles from "./NavMenu.module.css";
import classNames from "classnames";

interface NavMenuProps {
  isOpen: boolean;
}

export default function NavMenu({ isOpen }: NavMenuProps) {
  const menuClasses = classNames(
    styles.NavMenu,
    {
      [styles.open]: isOpen
    }
  );
  return (
    <nav className={menuClasses}>
      <ul>
        <Link href='projects'>Projects</Link>
        <Link href='contact'>Contact</Link>
      </ul>
    </nav>
  );
}