import React from 'react';
import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HomeTextConfig } from '../../../configurations/homepage/HomeTextConfig';
import { navbarStyles } from './navbarStyles';

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
    <path d="M4 6C4 4.89543 4.89543 4 6 4H10C11.1046 4 12 4.89543 12 6V11.5C12 12.3284 11.3284 13 10.5 13H4V6Z" fill="currentColor"/>
    <path d="M14 6C14 4.89543 14.8954 4 16 4H18C19.1046 4 20 4.89543 20 6V9C20 9.55228 19.5523 10 19 10H14V6Z" fill="currentColor"/>
    <path d="M4 16.5C4 15.6716 4.67157 15 5.5 15H10.5C11.3284 15 12 15.6716 12 16.5V18C12 19.1046 11.1046 20 10 20H6C4.89543 20 4 19.1046 4 18V16.5Z" fill="currentColor"/>
    <path d="M14 13C14 11.8954 14.8954 11 16 11H18C19.1046 11 20 11.8954 20 13V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V13Z" fill="currentColor"/>
  </svg>
);

export const Navbar = () => {
  const texts = HomeTextConfig.navbar;

  return (
    <div className={navbarStyles.container}>
      <nav className={navbarStyles.nav}>
        <Link to="/" className={navbarStyles.logoContainer} style={{textDecoration: 'none'}}>
          <LogoIcon />
          <span className={navbarStyles.logoText}>{texts.logoText}</span>
        </Link>
        <div className={navbarStyles.actionsContainer}>
          <button className={navbarStyles.signInButton}>
            <LogIn size={18} className={navbarStyles.signInIcon} />
            <span className={navbarStyles.signInText}>{texts.signIn}</span>
          </button>
          <button className={navbarStyles.createButton}>
            {texts.createNow}
          </button>
        </div>
      </nav>
    </div>
  );
};
