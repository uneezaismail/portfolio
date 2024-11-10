// import Link from 'next/link'
// import React from 'react'

// const Header = () => {
//   return (  
//         <header className='fixed bg-black flex justify-between items-center p-6 lg:px-20 w-full text-white'>
//             <div className='text-5xl'><span className='text-red-600'>Uneeza</span>Ismail</div>
//             <ul className='flex lg:w-[30%] justify-between text-2xl'>
//                 <li className='border-b-transparent transition duration-300 ease-linear hover:text-red-600 hover:border-b-2 hover:border-b-red-600 active:text-red-600 active:border-b-red-600'><Link href={"/"}>Home</Link></li>
//             <li className='border-b-transparent transition duration-300 ease-linear hover:text-red-600 hover:border-b-2 hover:border-b-red-600 active:text-red-600 active:border-b-red-600'><Link href={"/about"}>About</Link></li>
//             <li className='border-b-transparent transition duration-300 ease-linear hover:text-red-600 hover:border-b-2 hover:border-b-red-600 active:text-red-600 active:border-b-red-600'><Link href={"/skills"}>Skills</Link></li>
//             <li className='border-b-transparent transition duration-300 ease-linear hover:text-red-600 hover:border-b-2 hover:border-b-red-600 active:text-red-600 active:border-b-red-600'><Link href={"/project"}>Projects</Link></li>
//             </ul>
//             <button className='text-2xl font-semibold p-2 px-7 bg-white text-black rounded-lg transition-all duration-300 border-2 border-transparent hover:bg-text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-orange-600 hover:bg-red-600 hover:text-white'>
//   <Link href={"/contact"}>Contact</Link>
// </button>

//         </header>

//   )
// }

// export default Header


'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <div className="header__title">
      <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <FaBars />
      </div>
        <span className="highlight">Uneeza</span>Ismail
      </div>
      <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <li className="navbar__item"><Link href={"/"}>Home</Link></li>
        <li className="navbar__item"><Link href={"/components/about"}>About</Link></li>
        <li className="navbar__item"><Link href={"/components/project"}>Projects</Link></li>
      </ul>
     
      <div className={`close-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <FaTimes />
      </div>
      <button className="navbar__button"><Link href={"/components/contact"}>Contact</Link></button>
    </header>
  );
};

export default Header;
