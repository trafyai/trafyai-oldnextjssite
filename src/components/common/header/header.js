'use client'
import '@styles/common/header/Header.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef , useEffect} from "react";
import WhiteLogo from '@public/assets/Images/comman/header/whiteLogo.png';
import BlackLogo from '@public/assets/Images/comman/header/blackLogo.png';
import close from '@public/assets/Images/comman/header/close_small.png';
import hamburger from '@public/assets/Images/comman/header/hamburger-white.png';

import { useTheme } from 'next-themes';
import Light from '@public/assets/Images/comman/common/light_mode.png';
import Dark from '@public/assets/Images/comman/common/dark_mode.png';

function Header({ initialTheme }) { // Add initialTheme prop here
  const [lTheme, setLtheme] = useState(initialTheme === 'light');
  const [dTheme, setDtheme] = useState(initialTheme === 'dark');
  const [dropTheme,setDroptheme] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null); // Ref for timeout
  const { theme, setTheme } = useTheme();

 
  function lthemeChange() {
    
      setTheme('light');
      setLtheme(!lTheme);
   
  }
  function dthemeChange() {
   
      setTheme('dark');
      setDtheme(!dTheme);
   
  }

  function themeDropDown(){
    setDroptheme(!dropTheme);
  }
  useEffect(() => {
    // Call theme change functions on component mount (to ensure initial render)
    if (lTheme) lthemeChange();
    if (dTheme) dthemeChange();
  }, [lTheme, dTheme]);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('overflow'); 
  }

  // Close the menu when navigating to a different page
  function handleNavigation() {
    setMenuOpen(false);
    document.body.classList.remove('overflow'); 
  }

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
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
          <Link href="/"> <Image src={WhiteLogo} alt="trafy logo"  height={32} className="header-white-logo" /></Link>
          <Link href="/"> <Image src={BlackLogo} alt="trafy logo"  height={32} className="header-black-logo" /></Link>
        </div>

        <div className={`header-contents ${menuOpen ? 'show-contents' : ''}`}>

          <div className="header-contents-first">
            <button className="header-academy"><Link href="/courses">Courses</Link></button>
            <button className="header-resources"><Link href="/blogs"> Resources </Link></button>
            <div className="header-theme" onClick={themeDropDown}>
              <p>Theme</p>
              {dropTheme &&
              <div className='header-theme-drop'>
                <div className='header-theme-drop-item' onClick={lthemeChange}><Image src={Light}/><p>Light theme</p> </div>
                <div className='header-theme-drop-item' onClick={dthemeChange}><Image src={Dark}/><p>Dark theme</p> </div>
              </div>
              }
            </div>
          </div>

          <div className="header-contents-second">
            <Link href="/login" className="header-login"> Login</Link>
            <Link href="/signup" className="header-signup"> Sign Up Free</Link>
         
          <div className='header-theme-icons'>
            <Image
            src={Light}
            onClick={lthemeChange}
            width="20"
            height="20"
            className=" light-mode-icon"
          />
          <Image
            src={Dark}
            onClick={dthemeChange}
            width="20"
            height="20"
            className=" dark-mode-icon"
          />
            </div>



          </div>
          

        </div>
      </nav>
      
      <div >
        
      <Image src={hamburger} alt="" className={`hamburger ${menuOpen ? 'hide' : ''}`} style={{height:"20px"}}  onClick={toggleMenu} />
      <Image src={close} alt="" className={`exit-icon ${menuOpen ? 'show' : ''}`} onClick={toggleMenu} />
      </div>

      
    </header>
  );
}

Header.getInitialProps = async (ctx) => {
  // Fetch theme data from server
  const theme = await fetchThemeData();

  return {
    initialTheme: theme,
  };
};

export default Header;

