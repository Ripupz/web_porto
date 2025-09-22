'use client'
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import React from "react";


export default function Home() {

  const [isDarkMode, setIsDarkMode] = React.useState(true);

  useEffect( () => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    }
    else{
      setIsDarkMode(false);
    }
  },[])

  useEffect( () => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  },[isDarkMode])

  return <> 
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> 
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
  </>

}