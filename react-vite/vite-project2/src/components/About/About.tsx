import React from 'react'
import { BannerImg } from '../../image'

const About = () => {
  return (
    <>
    <span id='about'></span>
    <div className='bg-slate-200 dark:bg-black py-14 px-5 container'>
      <div className='grid grif-cols-1 sm:grid-cols-2'>
        <img src={BannerImg} alt="banner" className='max-h-[300px] sm:scale-125 drop-shadow-lg'/>

     <div className='space-y-5'>
         <div className='flex items-center'>
          <div className='text-7xl font-semibold text-primary/80'>01</div>
          <div>
            <p className='text-secondary capitalize'>global fitness</p>
            <h1 className='text-2xl sm:text-4xl font-bold  dark:text-white capitalize'>about us</h1>
          </div>
        </div>
        <div>
          <p className='text-justify dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Placeat, facilis libero a unde dolorum commodi laboriosam, 
             doloremque et fuga voluptatem id porro necessitatibus blanditiis
              aliquid laudantium quam repellat ullam quia?
            Fugit deleniti laborum obcaecati a, sunt dolor mollitia modi labore
             facilis amet ab dicta eveniet voluptatum animi reiciendis voluptatem 
             consectetur ut. Laudantium vero alias, suscipit molestiae minus non quo provident?
          </p>
        </div>
        <button className='btn'>get started</button>
     </div>
      </div>
    </div></>
  )
}

export default About