import React from 'react'

const Testimonials = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-4'>
     <div>
      <h3 className='text-2xl font-bold'>Latest News</h3>
      <div  className='grid grid-cols-2 my-8'>
      <div>
        <img src='/' alt='news' className='mb-2'/>
        <p className='text-sm font-bold'>news feed</p>
        <span className='italic text-sm text-gray-400'>date</span>
      </div>
      <div>
        <img src='/' alt='news' className='mb-2'/>
        <p className='text-sm font-bold'>news feed</p>
        <span className='italic text-sm text-gray-400'>date</span>
      </div>
     </div>
    </div>
     
     <div>
     <h3 className='text-2xl font-bold'>Testimonials</h3>
     <div className='flex my-8 gap-4'>
      <img src='/' alt='quotation mark'/>
      <div className='text-start'>
        <p className='text-gray-400 italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, nam.lorem20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, nam.lorem20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, nam.lorem20</p>
        <div className='flex mt-2'>
          <img src='/' alt='customer'/> 
          <div className=''>
            <p className='text-sm font-bold'>name</p>
            <span className='italic text-sm text-gray-400'>more details</span>
          </div>
        </div>
      </div>
     </div>
     </div>
    </div>
  </div>
  )
}

export default Testimonials
