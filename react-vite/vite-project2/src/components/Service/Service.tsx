import React from 'react'
import { ServicePlan } from '../../constant/Service'

const Service = () => {
  return (
  <>
  <span id='services'></span>
    <div className='bg-gray-400 py-14 container'>
     <div className='px-5'>
         <div className='pb-14'>
        <h1 className='text-center font-bold text-3xl sm:text-4xl'>Why <span className='text-secondary'>Choose</span> Us</h1>
      </div>
      <div className='grid gird-cols-span-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {ServicePlan.map((service)=>(
            <div key={service.id} className=' bg-gray-100 space-x-3 sm:space-y-6 sm:py-16 dark:bg-black dark:border-3 
           hover:border-secondary text-center dark:text-white hover:bg-primary/40 dark:hover:bg-purple-500/70 rounded-2xl '>
            <h1 className='text-3xl font-bold'>{service.name}</h1>
            <h1 className='text-4xl text-center font-semibold text-primary dark:hover:text-white'>{service.price}</h1>
            {service.description.map((des, key)=>(
            <p key={key}>{des}</p>
            ))}

            <p>{service.duration}</p>
            <a href="#" className='btn'>Learn More</a>
            </div>
        ) )}
      </div>
     </div>
    </div>
  </>
  )
}

export default Service
