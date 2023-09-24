import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Pack = () => {

const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
        <div>
            <div className='  w-full h-full flex p-[72px] gap-24 justify-start items-start '>
                <div className=' w-[36%] '>
                    <h1 className=' text-[42px] font-semibold'>
                        It's free, it's easy and it's fun to use for your first project.
                    </h1>
                </div>

                <div className=' flex gap-20'>

                <ScrollTrigger onEnter={ () => setCounterOn(true)} onExit={ () => setCounterOn(false)}>
                <div className=' bg-[#485AFF] px-16 py-12 justify-center items-center flex flex-col rounded-xl text-white'>
                    <h2 className=' text-xl font-bold mb-[3px]'>
                        Premium Pack
                    </h2>
                    <p className=' text-base font-normal mb-[24px]'>
                        Small teams
                    </p>
                    <div className=' flex justify-end items-end mb-12'>
                    <h1 className=' text-5xl font-bold animCounter'> $ </h1>
                    <h1 className=' text-5xl font-bold animCounter'>
                        {counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}
                    </h1>
                    <p>
                        /Month
                    </p>
                    </div>
                    
                    <div className=' flex flex-col justify-center items-center gap-4 mb-[37px]'>
                        <p className=' font-normal text-base'>
                            5 team members
                        </p>
                        <p className=' font-normal text-base'>
                            file sharing
                        </p>
                        <p className=' font-normal text-base'>
                            Financial Service Features
                        </p>
                    </div>
                    <div className=' flex justify-center items-center'>
                        <button className=' px-12 py-4 bg-[white] text-base font-semibold rounded-lg text-[#485AFF]'>
                            $20/ Month 
                        </button>
                    </div>
                </div>
                </ScrollTrigger>

                <ScrollTrigger onEnter={ () => setCounterOn(true)} onExit={ () => setCounterOn(false)}>
                <div className=' bg-white border px-16 py-12 justify-center items-center flex flex-col rounded-xl text-[#0F172A]'>
                    <h2 className=' text-xl font-bold mb-[3px]'>
                        Free Pack
                    </h2>
                    <p className=' text-base font-normal mb-[24px] text-[#4B5262]'>
                        Customer Reach and Bugdet
                    </p>
                    <div className=' flex justify-end items-end mb-12'>
                    <h1 className=' text-5xl font-bold animCounter'> $ </h1>
                    <h1 className=' text-5xl font-bold'>
                        {counterOn && <CountUp start={20} end={0} duration={2} delay={0} />}
                    </h1>
                    <p>
                        /Month
                    </p>
                    </div>
                    
                    <div className=' flex flex-col justify-center items-center gap-4 mb-[37px]'>
                        <p className=' font-normal text-base'>
                            1 team members
                        </p>
                        <p className=' font-normal text-base'>
                            No File sharing
                        </p>
                        <p className=' font-normal text-base'>
                            100 Mb Storage
                        </p>
                    </div>
                    <div className=' flex justify-center items-center'>
                        <button className=' px-12 py-4 bg-[#485AFF] text-base font-semibold rounded-lg text-white'>
                            Try for Free 
                        </button>
                    </div>
                </div>
                </ScrollTrigger>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Pack