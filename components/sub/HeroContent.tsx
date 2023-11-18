'use client'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          className='Welcome-box py-[15px] px-[8px] border border-[#7042f88b] opacity-[0.9]'
          variants={slideInFromTop}
        >

          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
          <h1 className='Welcome-text text-[13px]'>Fullstack Developer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
        
        >
          Providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">the best</span>
          project experience
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
        >


        </motion.p>
      </div>

    </motion.div>
  )
}