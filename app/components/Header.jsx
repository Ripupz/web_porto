'use client'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Header = () => {
  const ref = useRef(null); // Reference to the header element
  const isInView = useInView(ref, { once: false, amount: 0.5 }); // Trigger when 50% of the header is in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.4,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }}
      className="w-11/12 max-w-3xl text-center mx-auto h-screen 
      flex flex-col items-center justify-center gap-4"
    >
      
        <div>
          <Image src={assets.profile_img} alt="" className="rounded-full w-32 max-w-full" />
        </div>

        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
          Hi! I'm Rafif Adhirajasa{' '}
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
          Machine Learning developer & Data Scientist
        </h1>
        <p className="max-w-2xl mx-auto font-Ovo">
          Hi, I’m Rafif — a Machine Learning Developer and Data Scientist based
          in Indonesia. I love turning data into insights and building web apps
          people enjoy using.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            Contact me{' '}
            <Image
              src={assets.right_arrow_white}
              alt="right white arrow"
              className="w-4"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rafif-adhirajasa-063ba61b7"
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            My linkedin{' '}
            <Image
              src={assets.arrow_icon}
              alt="right blackarrow"
              className="w-3"
            />
          </a>
        </div>
      
    </motion.div>
  );
};

export default Header;