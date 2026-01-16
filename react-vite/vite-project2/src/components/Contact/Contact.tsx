import React from 'react'

const Contact = () => {
  return (
    <>
    <span id='join'></span>
    <div className='dark:bg-black container'>
      <div className='gird grid-cols-1 sm:grid-cols-3 items-center px-6 py-8 dark:border-2 rounded-md dark:border-secondary'>
        <div className='col-span-2'>
            <h1 className='text-3xl font-bold sm:text-4xl dark:text-white'>
                <span className='text-secondary'>Sweat now, Shine later,</span> your body is a reflection of your lifestyle choices
            </h1>
        </div>
        <div>
            <button className='btn'>Contact</button>
        </div>
      </div>
    </div></>
  )
}

export default Contact
