"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import archive from '../public/Archive.jpg'
import board from '../public/board.svg'
import chart from '../public/chart.svg'
import folder from '../public/folder.svg'
import headphone from '../public/headphones.svg'
import storage from '../public/storage.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Grid = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className=' flex justify-center items-center flex-col w-full text-center py-24'>
        <div className=' pt-5 pb-[101px]'>
            <h1 className=' text-2xl' data-aos='zoom-in-up' data-aos-anchor-placement='top' data-aos-once='true'>
                Bring team collaboration and productivity like never before.
            </h1>
        </div>
        <div className=' grid grid-cols-3 grid-rows-2 pl-[72px] pr-[72px]'>

            <div className=' border-b-2 pl-[45px] pr-20 pb-[85px] border-r-2' data-aos='zoom-in' data-aos-easing='linear' data-aos-anchor-placement='top'>
            <Image data-aos='fade-down' data-aos-anchor-placement='top'
            src={headphone}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={100}>
                    Support
                </h1>
                <h2 className=' text-base p-2' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={200}>
                    Centralize your data from multiple sources and process it in real time                
                </h2>
            </div>

            <div className=' border-b-2 pl-[45px] pr-[45px] pb-[85px]  border-r-2' data-aos='zoom-in' data-aos-delay={50}>
            <Image data-aos='fade-down' data-aos-anchor-placement='top'
            src={chart}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={100}>
                    24/7
                </h1>
                <h2 className=' text-base p-2' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={200}>
                Real time feedback for all your queries 
                </h2>                
            </div>  
            <div className=' border-b-2 pl-[55px] pr-[45px] pb-[85px] ' data-aos='zoom-in' data-aos-easing='linear' data-aos-delay={100}>
            <Image data-aos='fade-down' data-aos-anchor-placement='top'
            src={board}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={100}>
                    Interface
                </h1>
                <h2 className=' text-base p-2' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={200}>
                    Auto backup, smooth interface ensures you complete your scheduled tasks                
                </h2>
            </div>  
            <div className=' pl-[45px] pr-20 border-r-2 pt-[59px]' data-aos='zoom-in' data-aos-easing='linear' >
            <Image data-aos='fade-down' data-aos-anchor-placement='top'
            src={archive}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={100}>
                    Backup
                </h1>
                <h2 className=' text-base p-2' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={200}>
                    Ensure no data is lost with our auto AI powered backup systems                
                </h2>
            </div>  
            <div className=' pl-[45px] pr-[43px] pt-[59px] border-r-2' data-aos='zoom-in' data-aos-easing='linear' data-aos-delay={50}>
            <Image data-aos='fade-down' data-aos-anchor-placement='top'
            src={folder}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={100}>
                    Flexibility
                </h1>
                <h2 className=' text-base p-2' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={200}>
                    Track’s world class interface built for speed and delight                
                </h2>
            </div>  
            <div className=' pl-[55px] pr-[45px] pt-[59px]' data-aos='zoom-in' data-aos-easing='linear' data-aos-delay={100}>
            <Image data-aos='fade-down' data-aos-anchor-placement='top'
            src={storage}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={100}>
                    Storage
                </h1>
                <h2 className=' text-base p-2' data-aos='fade-down' data-aos-anchor-placement='top' data-aos-delay={200}>
                    Unlimited storage for your teams                 
                </h2>
            </div>  
            </div>
    </div>
  )
}

export default Grid;    