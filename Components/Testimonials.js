import Image from 'next/image'
import React from 'react'
import left from '../public/LeftImg.jpg'
import right from '../public/RightImg.jpg'
import stars from '../public/Stars.jpg'

const Testimonials = () => {
  return (
    <div>
        <div className=' flex justify-center items-center'>
            <h2 className=' text-xl mb-44 font-medium'>
            2000+ Happy users
            </h2>
        </div>

        <div className=' flex w-full justify-center items-center mb-60 gap-11'>

            <div className='w-[655px] flex'>
                <Image src={left} width={250} height={250} alt='/' className=' rounded-lg mr-10'/> 
            <div className=' inline'>
                <Image src={stars} width={100} height={5} alt='/' className=' h-[18px] w-[121px] mt-4'/>
                <h2 className=' mt-[30px] text-lg font-medium'>
                Track has simplified all <br/> my tasks.Managing my work has become <br/> easier.”
                </h2> 
                <div className=' flex mt-[48px]'>
                    <h2 className=' text-base font-semibold mr-5'>Jenny Wilson</h2>
                    <h3 className=' text-base font-normal text-[#64748B]'>Grower.io</h3>
                </div>  
            </div>
            </div>

            <div className='w-[655px] flex'>
                <Image src={right} width={250} height={250} alt='/' className=' rounded-lg mr-10'/> 
            <div className=' inline'>
                <Image src={stars} width={100} height={5} alt='/' className=' h-[18px] w-[121px] mt-4'/>
                <h2 className=' mt-[30px] text-lg font-medium'>
                No more switching between taks. Time <br/> management has become efficient for <br/> my team
                </h2> 
                <div className=' flex mt-[48px]'>
                    <h2 className=' text-base font-semibold mr-5'>Devon Lane</h2>
                    <h3 className=' text-base font-normal text-[#64748B]'>DLDesign.co</h3>
                </div>  
            </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonials