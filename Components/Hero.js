import React from 'react'
import Image from 'next/image'
import background from '@/public/bg.jpg'

const Hero = () => {
  return (
    <div>
        <div className='relative'>

        <Image className=' relative z-[-1] w-full' 
        src={background}
        width={500}
        height={500}
        alt='/'
        style={ { objectFit: 'cover'} }
        />

        <div className=' container'>
            <div className=' hero-title'>
                <h1 className='text-black text-6xl font-bold text-center'>Manage your projects and<br/>collaborate with teams</h1>
            </div>
            <div className=' hero-subtitle'>
                <h3 className=' text-black text-2xl font-medium py-[36px] text-center'>A tool for visualising , organising and tracking all the work you do</h3>
            </div>
            <div className=' flex justify-center items-center gap-3'>
                <button className='get-started text-base font-semibold bg-[#DBF301] px-6 py-3 rounded-xl'>Get Started</button>
                <button className='book-demo border-[#DBF301] border text-base font-semibold px-6 py-3 rounded-xl'>Book Demo</button>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Hero