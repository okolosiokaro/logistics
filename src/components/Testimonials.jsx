import React from 'react';
import { LuQuote } from "react-icons/lu";

const Testimonials = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-4'>
     <div>
      <h3 className='text-2xl font-bold'>Latest News</h3>
      <div  className='grid grid-cols-2 my-8'>
      <div>
        <img src='https://media.istockphoto.com/id/1183087605/photo/young-male-gig-driver-waiting-to-get-started-on-deliveries.webp?b=1&s=170667a&w=0&k=20&c=vZ1DCur9PbsbbmtU7Kz1OGHyuL3JcZ5hyHhpfZN8r90=' alt='news' className='mb-2 w-4/5 md:h-[200px] h-[100px]'/>
        <p className='text-sm font-bold'>news feed</p>
        <span className='italic text-sm text-gray-400'>date</span>
      </div>
      <div>
        <img src='https://media.istockphoto.com/id/1472189909/photo/woman-supervising-the-dispatch-of-trucks-at-a-distribution-warehouse.webp?b=1&s=170667a&w=0&k=20&c=Pjy6QVAGYrVWFZx4eUf6rYqI5EKzzj1Lo1Wj-X453qo=' alt='news' className='mb-2 w-4/5 md:h-[200px] h-[100px]'/>
        <p className='text-sm font-bold'>news feed</p>
        <span className='italic text-sm text-gray-400'>date</span>
      </div>
     </div>
    </div>
     
     <div>
     <h3 className='text-2xl font-bold'>Testimonials</h3>
     <div className='flex my-8 gap-4'>
      <div className='text-3xl text-[#00df9a]'>
      <LuQuote />
      </div>
      <div className='text-start'>
        <p className='text-gray-400 italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, nam.lorem20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, nam.lorem20 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, nam.lorem20</p>
        <div className='flex mt-2 gap-2'>
          <img src='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww' alt='customer' className='rounded-full w-[40px] h-[40px]'/> 
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
