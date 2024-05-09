'use client'
import '@styles/common/header/Header.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef } from "react";
import blackLogo from '@public/assets/Images/comman/header/whiteLogo.png';
import close from '@public/assets/Images/comman/header/close_small.png';
import hamburger from '@public/assets/Images/comman/header/hamburger-white.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null); // Ref for timeout

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('overflow'); // Add or remove overflow class for body
  }

  // Close the menu when navigating to a different page
  function handleNavigation() {
    setMenuOpen(false);
    document.body.classList.remove('overflow'); // Ensure overflow class is removed when navigating
  }

 
 

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Clear previous timeout if exists
    setHover(true); // Show dropdown
  }

  const handleMouseLeave = () => {
    // Set timeout to hide dropdown after 3 seconds
    timeoutRef.current = setTimeout(() => {
      setHover(false);
    }, 200);
  }

  return (
    <header className="header">
      <nav className="header-container">
       <div className="logo">
       <Link href="/"> <Image src={blackLogo} alt="trafy logo"  height={32} /></Link>
        </div>

        <div className={`header-contents ${menuOpen ? 'show-contents' : ''}`}>

          <div className="header-contents-first">
            <button className="header-academy"><Link href="/courses">Courses</Link></button>
            <button className="header-resources"><Link href="/blogs"> Resources </Link></button>
          </div>

          
            <div className="header-contents-second">
              <Link href="/login" className="header-login"> Login</Link>
              <Link href="/signup" className="header-signup"> Sign Up Free</Link>
            </div>
         
        </div>
      </nav>
      <Image src={hamburger} alt="" className={`hamburger ${menuOpen ? 'hide' : ''}`} style={{height:"20px"}}  onClick={toggleMenu} />
      <Image src={close} alt="" className={`exit-icon ${menuOpen ? 'show' : ''}`} onClick={toggleMenu} />
      
    </header>
  );
}

export default Header;
