import React from 'react'
import { HeroImg } from '../../image'

const HeroSection = () => {
    return (
        <div className='relative'>
            <img src={HeroImg} alt="HeroImg" className='w-full h-full object-cover absolute' />
           <div className='relative bg-white/50 dark:bg-black/70'>
             <div className='min-h-[600px] flex items-center'>
                <div className='text-center mx-auto w-full md:max-w-2xl'>
                    <p className='text-primary text-2xl capitalize'>Start Your Fitness</p>
                    <h1 className='text-5xl md:text-4xl font-semibold dark:text-white'>Your Fitness Journey Begins</h1>
                    <p className='py-2 dark:text-white'>The body achieves that mind believes</p>
                    <button className='btn'>Get Started</button>
                </div>
            </div>
           </div>
        </div>
    )
}

export default HeroSection
