"use client"
import Image from 'next/image'
import React from 'react'
import logo from '../public/Logo.svg'
import { Divider } from 'antd';
import twitter from '../public/twitter.svg'
import twitterHover from '../public/twitter-hover.svg'
import facebook from '../public/facebook.svg'
import facebookHover from '../public/facebook-hover.svg'
import instagram from '../public/instagram.svg'
import instagramHover from '../public/instagram-hover.svg'



const Footer = () => {
  return (
    <>
        <div className='footer bg-[#110D33] py-20 px-28 '>
            <div className='flex justify-between items-center text-white'>
                
                <div className=' flex gap-4 pl-5'>
                <Image className='logo'
                src={logo}
                width={30}
                height={30}
                alt='/'
                />
                <h1 className=' text-base font-bold'>
                    TRACK
                </h1>
                </div>

                <div className=' flex justify-between items-center w-[30%] text-base font-medium'>
                    <h2>
                        Features
                    </h2>
                    <h2>
                        Our Team
                    </h2><h2>
                        Pricing
                    </h2>
                </div>

                <div className=' flex justify-center items-center pr-5 gap-3'>

                <div className='twitter-container'>
                <div className='twitter'>
                <Image
                src={twitter}
                width={28}
                height={28}
                alt='/'
                />
                </div>
                <div className='twitter-hover'>
                <Image
                src={twitterHover}
                width={28}
                height={28}
                alt='/'
                />
                </div>
                </div>

                <div className='facebook-container'>
                <div className='facebook'>
                <Image
                src={facebook}
                width={28}
                height={28}
                alt='/'
                />
                </div>
                <div className='facebook-hover'>
                <Image
                src={facebookHover}
                width={28}
                height={28}
                alt='/'
                />
                </div>
                </div>

                <div className='instagram-container'>
                <div className='instagram'>
                <Image
                src={instagram}
                width={38}
                height={38}
                alt='/'
                />
                </div>
                <div className='instagram-hover'>
                <Image
                src={instagramHover}
                width={32}
                height={32}
                alt='/'
                />
                </div>
                </div>

                </div>
            </div>\
            <div>
                <Divider className=' bg-[#464C56] mt-[103px]'/>
            </div>
            <div className=' flex justify-center items-center text-white text-sm font-normal'>
                <h2>
                    Made in Figma
                </h2>
            </div>
        </div>
    </>
  )
}

export default Footer