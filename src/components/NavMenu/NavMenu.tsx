import Link from "next/link";
import styles from "./NavMenu.module.css";
import classNames from "classnames";

interface NavMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function NavMenu({ isOpen, closeMenu }: NavMenuProps) {
  const menuClasses = classNames(
    styles.NavMenu,
    {
      [styles.open]: isOpen
    }
  );
  return (
    <nav className={menuClasses}>
      <ul onClick={closeMenu} >
        <Link href='/'>About</Link>
        <Link href='projects'>Projects</Link>
        <Link href='contact'>Contact</Link>
      </ul>
    </nav>
  );
}