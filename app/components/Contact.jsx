import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>

      {/* Horizontal Line */}
        <div className="border-t border-gray-300 my-8"></div>

      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{amount: 0.5 }}
      >
      
        <h4 className='text-center mb-2 text-lg font-Ovo'>Get in Touch</h4>
        <h2 className='text-center text-5xl font-Ovo'>Contact Me</h2>
        <p className='mb-12 max-w-2xl font-Ovo text-center mx-auto mt-5'>I would love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.</p>
        
        <div>
            <ul className='items-center 
      gap-6 lg:gap-8 rounded-full px-12 py-3 flex flex-col sm:flex-row justify-center'>
                <li><a className="flex items-center gap-2" href="mailto:rafifadhirajasa88@example.com">Email Me <Image src={assets.arrow_icon} alt='right blackarrow' className='w-2' /></a></li>
                <li><a className="flex items-center gap-2" href="https://www.linkedin.com/in/rafif-adhirajasa-063ba61b7" target="_blank">LinkedIn <Image src={assets.arrow_icon} alt='right blackarrow' className='w-2' /></a></li>
                <li><a className="flex items-center gap-2" href="https://github.com/Ripupz" target="_blank">GitHub <Image src={assets.arrow_icon} alt='right blackarrow' className='w-2' /></a></li>
                <li><a className="flex items-center gap-2" href="https://www.instagram.com/ripupz" target="_blank">My Instagram <Image src={assets.arrow_icon} alt='right blackarrow' className='w-2' /></a></li>
            </ul>
        </div>
      </motion.div>
        
        {/* Horizontal Line */}
        <div className="border-t border-gray-300 my-8"></div>

       
     {/* Footer Section */}
    <motion.div className="flex justify-between items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{amount: 0.5 }}
    >
        
    </motion.div>
    <div className="flex justify-between items-center">
      <span className="text-lg font-Ovo">Rafif Adhirajasa©</span>
        <span className="text-lg font-Ovo">Thank you :D</span>
    </div>
    </div>
  )
}

export default Contact