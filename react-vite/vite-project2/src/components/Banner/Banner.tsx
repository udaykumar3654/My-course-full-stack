import React from 'react'
import { BannerImg2 } from '../../image'

const Banner = () => {
  return (
    <div className='py-14 bg-slate-200 dark:bg-black container'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='space-y-5 pr-10 px-5'>
          <div className='flex items-center gap-3'>
            <div>
              <h1 className='text-7xl text-primary/80 font-semibold'>02</h1>
            </div>
            <div>
              <p className='text-secondary capitalize'>globa fitness</p>
              <h1 className='capitalize text-2xl sm:text4xl font-bold dark:text-white'>About Us</h1>
            </div>
          </div>
          <div>
            <p className='text-justify dark:text-white'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, quas commodi? Enim dolores unde rerum vel magni 
            sed a quibusdam qui nulla, culpa earum illum itaque aliquid voluptas, assumenda placeat?
            Dolorum optio, quia excepturi voluptates doloribus vitae aut vero exercitationem deserunt sapiente nihil, at facere, 
            autem neque reprehenderit quis nobis facilis. Cum atque optio odio amet quasi eos excepturi laudantium.
            </p>
          </div>
          <button className='btn'>get started</button>
        </div>
        <img src={BannerImg2} alt="Banner2" className='mx-h-[300px] sm:scale-125 drop-shadow-lg' />
      </div>
    </div>
  )
}

export default Banner
