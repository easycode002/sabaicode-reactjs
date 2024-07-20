import React from 'react'
import Marquee from 'react-fast-marquee'
const MarqueePage: React.FC = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-[#181818] text-neutral-200'>
      <div className='w-[50%] flex flex-col'>
        <div className='flex space-y-2 flex-col text-center mb-14'>
          <span className='text-5xl font-bold'>Skill that i don't have</span>
          <span className='text-2xl'>These are the technologies I've worked with</span>
        </div>
        <Marquee 
            autoFill={true} 
            play={true} 
            pauseOnHover={true} 
            pauseOnClick={true} 
            direction='right' 
            speed={100} 
            gradient={false} 
            gradientColor='#FFB8D1'
            className="bg-pink-200 py-1">
          <div className='bg-[#202020] m-1 rounded flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            HTML
          </div>
          <div className='bg-[#202020] m-1 rounded flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            CSS
          </div>
          <div className='bg-[#202020] m-1 rounded flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            JavaScript
          </div>
          <div className='bg-[#202020] m-1 rounded flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            TypeScript
          </div>
          <div className='bg-[#202020] m-1 rounded flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            ReactJS
          </div>
          <div className='bg-[#202020] m-1 rounded flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            React + TypeScript
          </div>
          <div className='bg-[#202020] m-1 rounded flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            NextJS
          </div>
          <div className='bg-[#202020] m-1 rounded flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            NodeJS + ExpressJS
          </div>
          <div className='bg-[#202020] m-1 rounded flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            AWS - CI/CD
          </div>
          <div className='bg-[#202020] m-1 rounded flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            Micro-Front-end
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default MarqueePage
