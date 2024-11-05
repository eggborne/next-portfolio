'use client'

import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger.client";
import NavMenu from "../NavMenu/NavMenu";
import Link from "next/link";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      <Link className='header-legend' href='/'><h1>Mike Donovan</h1><small>Full-Stack Web Developer</small></Link>
      <Hamburger isOpen={menuOpen} toggleMenu={toggleMenu} />
      <NavMenu isOpen={menuOpen} closeMenu={toggleMenu} />
    </header>
  );
}