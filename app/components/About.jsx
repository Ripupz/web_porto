import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

        <div className='flex w-full flex-col lg:flex-row 
        items-center gap-20 my-20'>

        {/* Image Section */}
        <motion.div
          className='w-64 sm:w-80 rounded-3xl max-w-none'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
          viewport={{ amount: 0.5 }}
          whileHover={{rotateZ: 20, scale: 1.05}}
        >
            <Image src={assets.user_image} alt='User Image' className='w-full rounded-3xl'/>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className='flex-1'
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
          viewport={{ amount: 0.5 }}
        >
                <p className='mb-10 max-w-2xl font-Ovo'>I’m Rafif, a Machine Learning Developer and Data Scientist based in Indonesia. I specialize in building intelligent systems that turn data into actionable insights, using tools like Python, TensorFlow, and PyTorch.Beyond AI and data science, I enjoy creating clean, functional, and visually appealing web applications that deliver great user experiences.</p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description},index) => (
                    <li className='border-[0.5px] border-gray-400 rounded-xl
                    p-6 cursor-pointer hover-bg-lightHover hover:-translate-y-1 duration-500 hover-shadow-black' key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                    </li>
                ))}
            </ul>

                <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use </h4>
                <ul className='flex items-center gap-3 sm:gap-5'> 
                    {toolsData.map((tool,index) => (
                        <li className='flex items-center justify-center w-12 sm:w-14 
                        aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                        <Image src={tool} alt='tool' className='w-5 sm:w-7'/>
                        </li>
                    ))}
                </ul>

            </motion.div>
        </div>
    </div>
  )
}

export default About