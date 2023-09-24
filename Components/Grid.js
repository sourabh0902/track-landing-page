"use client"
import React from 'react'
import Image from 'next/image'
import archive from '../public/Archive.jpg'
import board from '../public/Board.jpg'
import chart from '../public/Chart.jpg'
import folder from '../public/Folder.jpg'
import headphone from '../public/Headphones.jpg'
import storage from '../public/Storage.jpg'


const Grid = () => {
  return (
    <div className=' flex justify-center items-center flex-col w-full text-center py-24'>
        <div className=' pt-5 pb-[101px]'>
            <h1 className=' text-2xl'>Bring team collaboration and productivity like never before.</h1>
        </div>
        <div className=' grid grid-cols-3 grid-rows-2 pl-[72px] pr-[72px]'>
            <div className=' border-b-2 pl-[45px] pr-20 pb-[85px]  border-r-2'>
            <Image 
            src={headphone}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl'>
                    Support
                </h1>
                <h2 className=' text-base p-2'>
                    Centralize your data from multiple sources and process it in real time                
                </h2>
            </div>            
            <div className=' border-b-2 pl-[45px] pr-[45px] pb-[85px]  border-r-2'>
            <Image 
            src={chart}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl'>
                    24/7
                </h1>
                <h2 className=' text-base p-2'>
                Real time feedback for all your queries 
                </h2>                
            </div>  
            <div className=' border-b-2 pl-[55px] pr-[45px] pb-[85px] '>
            <Image 
            src={board}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl'>
                    Interface
                </h1>
                <h2 className=' text-base p-2'>
                    Auto backup,smooth interface ensures you complete your scheduled tasks                
                </h2>
            </div>  
            <div className=' pl-[45px] pr-20 border-r-2 pt-[59px]'>
            <Image 
            src={archive}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl'>
                    Backup
                </h1>
                <h2 className=' text-base p-2'>
                    Ensure no data is lost with our auto AI powered backup systems                
                </h2>
            </div>  
            <div className=' pl-[45px] pr-[43px] pt-[59px] border-r-2'>
            <Image 
            src={folder}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl'>
                    Flexibility
                </h1>
                <h2 className=' text-base p-2'>
                    Track’s world class interface built for speed and delight                
                </h2>
            </div>  
            <div className=' pl-[55px] pr-[45px] pt-[59px]'>
            <Image 
            src={storage}
            width={44}
            height={44}
            alt='/'
            style={ {display: 'inline'} }
             />
                <h1 className=' mt-[42px] mb-[22px] text-xl'>
                    Storage
                </h1>
                <h2 className=' text-base p-2' >
                    Unlimited storage for your teams                 
                </h2>
            </div>  
            </div>
    </div>
  )
}

export default Grid;    