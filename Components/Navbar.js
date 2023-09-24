"use client"
import React, { useRef, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../public/Logo.svg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {

    const navbarRef = useRef();

    gsap.registerPlugin(ScrollTrigger);
  
    useEffect(() => {
      const navbar = navbarRef.current;
  
      gsap.to(navbar, {
        backgroundColor: '#000',
        height: '80px',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.navbar',
          scroller: 'body',
          markers: false,
          start: 'top -10%',
          end: 'top -90%',
          scrub: true,
          onUpdate: (self) => {
            if (self.progress >= 0.1) {
                gsap.to(navbar.querySelectorAll('h4, ul'), {
                    color: '#fff',
                    duration: 0.5,
                });
                } else {
                gsap.to(navbar.querySelectorAll('h4, ul'), {
                    color: '#000',
                    duration: 0.5,
                });
                }
            },
            },
        });
        }, []);


  return (
    <div ref={navbarRef} className=' navbar fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className=' w-full m-auto flex justify-between items-center p-4 text-black pr-[72px] pl-[72px]'>
            <Link href="/" className=' flex gap-4'>
            <Image className=' w-8 h-8'
            src={logoImg} 
            alt='/' 
            width={35}
            height={30}
            />
            <h4 className=' font-bold text-2xl'>
                TRACK
            </h4>
            </Link>
            <ul className=' hidden sm:flex gap-24 ml-[72px]'>
                <li className=' text-base'>
                    <Link href="/">Features</Link>
                </li>
                <li className=' text-base'>
                    <Link href="/">Our Team</Link>
                </li>
                <li className=' text-base'>
                    <Link href="/">Pricing</Link>
                </li>
            </ul>
            <ul className=' flex gap-6 justify-center items-center'>

                    <h4>Sign In</h4>

                    <button className='font-medium nav-btn'>Get Started</button>

            </ul>
            </div>
            </div>
  )
}

export default Navbar