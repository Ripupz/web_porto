import { assets } from '@assets/assets';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Ovo } from 'next/font/google';

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
});

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false);

    const sideMenuRef = useRef();
    const openSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll',() => {
          if(scrollY > 50) {
            setIsScroll(true)
          }else{
            setIsScroll(false);
          }
        })
    },[]);

  return (
  <>

    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'> 
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
    
    <nav className={`w-full fixed px-5 lg:px-8 
    xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "navbar-blur" : "navbar-no-blur"}`}>
      <a href='#'>
        <h1 className="w-28 cursor-pointer mr-14">Rafif Adhirajasa</h1>
      </a>

      <ul className={`hidden md:flex items-center 
      gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '':'bg-white shadow-sm bg-opacity-50'}`}>
        <li><a className="font-Ovo" href="#">Home</a></li>
        <li><a className="font-Ovo" href="#about">About me</a></li>
        <li><a className="font-Ovo" href="#works">My Works</a></li>
        <li><a className="font-Ovo" href="#contact">Contact Me</a></li>
      </ul>

      <div className='flex items-center gap-4'>

        {/* <button> 
            <Image src={assets.moon_icon} alt='' className="w-6" />
        </button> */}

        <a href="https://www.linkedin.com/in/rafif-adhirajasa-063ba61b7" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4">
          Connect <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
        </a>

        <button className='block md:hidden ml-3' onClick={openSideMenu}>
            <Image src={assets.menu_black} alt='' className='w-6' />
        </button>
      </div>

    {/* Mobile Menu */}
    <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'> 
        
        <div className='absolute right-6 top-6' onClick={closeSideMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
        </div>

        <li><a className="font-Ovo" onClick={closeSideMenu} href="#">Home</a></li>
        <li><a className="font-Ovo" onClick={closeSideMenu} href="#about">About me</a></li>
        <li><a className="font-Ovo" onClick={closeSideMenu} href="#works">My Works</a></li>
        <li><a className="font-Ovo" onClick={closeSideMenu} href="#contact">Contact Me</a></li>
    </ul>

    </nav>
    </>
  );
};

export default Navbar;