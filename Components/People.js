"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Tooltip } from 'antd';
import styled from "styled-components";
import girlcenter from '../public/GirlCenter.png'
import leftfirst from '../public/LeftFirst.png'
import rightfirst from '../public/RightFirst.png'
import leftmost from '../public/leftmost.png'
import rightmost from '../public/RightMost.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const CustomTooltip = ({ className, children, ...restProps }) => (
  <Tooltip overlayStyle={{ lineBreak: 'anywhere' }} overlayClassName={className} {...restProps}>
    {children}
  </Tooltip>
);

const StyledTooltip = styled(CustomTooltip)`
  .ant-tooltip-arrow {
    margin-bottom: 7px;

  }

  .ant-tooltip-inner {
    color: black;
    border-radius: 20px;
    transform: rotate(3deg);
    margin-bottom: 7px;
  }
`


const People = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className=' inline-block justify-center items-center text-center w-full mb-40 mt-16'>
        <h2 className=' text-2xl font-normal' data-aos='zoom-in-up' data-aos-anchor-placement='top-center' data-aos-once='true'>
          Your favorite project management team now flexible enough to take on any <br/> project. Work how you want and where you want.
        </h2>
      </div>
        <div className='  flex justify-center items-center p-5 relative mb-28'>

        {/* LeftMost */}
        <StyledTooltip 
        color= "white"
        title= {
        <>
          <div className=' grid grid-rows-2 px-6 py-2 '>
            <h1 className=' text-base font-semibold text-center'>Jenny Wilson</h1>
            <p className=' text-sm font-normal text-[#71717A]'>Co-Founder, CEO</p>
          </div>
        </>        
        }        
        >
            <div className='circle leftmost' data-aos='bounce' data-aos-anchor-placement='top-center'>
              <Image 
              className='person img'
              src={leftmost}
              width={290}
              height={200}
              alt='/'
              style={ {top: '57%'} }
              />
            </div>
        </StyledTooltip>

        {/* Left First */}
        <StyledTooltip 
        color= "white"
        title= {
        <>
        <div className=' grid grid-rows-2 px-6 py-2'>
          <h1 className=' text-base font-semibold text-center'>Jenny Wilson</h1>
          <p className=' text-sm font-normal text-[#71717A]'>Co-Founder, CEO</p>
        </div>
        </>        
        }        
        >
            <div className='circle leftfirst'>
              <Image 
              className='person img'
              src={leftfirst}
              width={331}
              height={331}
              alt='/'
              />
            </div>
        </StyledTooltip>

        {/* Center Girl */}
        <StyledTooltip 
        color= "white"
        title= {
        <>
        <div className=' grid grid-rows-2 px-6 py-2'>
          <h1 className=' text-base font-semibold text-center'>Jenny Wilson</h1>
          <p className=' text-sm font-normal text-[#71717A]'>Co-Founder, CEO</p>
        </div>
        </>        
        }        
        >
            <div className='circle center'>
              <Image 
              className='person'
              src={girlcenter}
              width={331}
              height={331}
              alt='/'
              />
            </div>
        </StyledTooltip>

        {/* Right First  */}
        <StyledTooltip 
        color= "white"
        title= {
        <>
        <div className=' grid grid-rows-2 px-6 py-2'>
          <h1 className=' text-base font-semibold text-center'>Jenny Wilson</h1>
          <p className=' text-sm font-normal text-[#71717A]'>Co-Founder, CEO</p>
        </div>
        </>        
        }        
        >
            <div className='circle rightfirst'>
              <Image 
              className='person'
              src={rightfirst}
              width={200}
              height={170}
              alt='/'
              />
            </div>
        </StyledTooltip>

        {/* Right Most  */}
        <StyledTooltip 
        color= "white"
        title= {
        <>
        <div className=' grid grid-rows-2 px-6 py-2'>
          <h1 className=' text-base font-semibold text-center'>Jenny Wilson</h1>
          <p className=' text-sm font-normal text-[#71717A]'>Co-Founder, CEO</p>
        </div>
        </>        
        }        
        >
            <div className='circle rightmost'>
              <Image 
              className='person'
              src={rightmost}
              width={250}
              height={301}
              alt='/'
              style={ {top: '60%'} }
              />
            </div>
        </StyledTooltip>


        </div>
    </div>
  )
}

export default People;