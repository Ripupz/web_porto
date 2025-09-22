import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';

const Work = () => {
  return (
    <div id='works' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Works & Projects</h2>
        <p className='mb-12 max-w-2xl font-Ovo text-center mx-auto mt-5'>I am a passionate developer with experience in building web applications using modern technologies. Here are some of my notable works:</p>
    
    <div className='grid grid-cols-auto gap-5 my-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {workData.map((project,index) =>(
             <a key={index} href={project.github} target="_blank" rel="noopener noreferrer">
              <div 
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                style={{backgroundImage: `url(${project.bgImage})`, backgroundSize: 'contain'}}>
                <div className='bg-white w-10/12 rounded-md absolute 
                bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                  <div>
                      <h2 className='font-semibold'>{project.title}</h2>
                      <p className='text-sm text-gray-700'>{project.description}</p>
                  </div>
                  <div className='border rounded-full border-black w-9
                      aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                      <Image src={assets.send_icon} alt="Send Icon" className='w-5' />
                  </div>
                </div>
              </div>
            </a>
        ))}
    </div>

    
    

    </div>
    
  )
}

export default Work