import React from 'react'
import { ServiceLists } from '../data/data'
import service from '../assets/service.png'

const Services = () => {
  return (
  <div className='bg-gray-50 pb-16 px-4'>
    <div className='relative w-full max-w-[1240px] mx-auto flex justify-between flex-col-reverse md:flex-col-reverse lg:flex-row '>
      <div className='lg:w-2/3'>
      <h2 className='text-2xl font-bold'>What makes us special</h2>
       <p className='md:text-xl text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates rem doloribus distinctio accusamus consectetur ipsa incidunt quidem eveniet velit.</p>
      <div className='grid md:grid-cols-2 gap-6 mt-8'>
          {ServiceLists.map(ServiceList=> (
            <div key={ServiceList.id} className='w-full flex justify-between gap-4'>
              <div className='text-2xl md:text-4xl text-[#00df9a]'>
                {ServiceList.icon}
              </div>
              <div>
                <h5 className=' text-lg md:text-xl text-[#00df9a] font-bold'>{ServiceList.name}</h5>
                <p className='md:text-xl text-sm mt-2'>{ServiceList.description}</p>
              </div>
            </div>
          ))}
      </div>
      </div>
      <img src={service} alt='pic here' className='lg:absolute lg:-right-12 lg:-bottom-36 md:w-3/4 lg:w-[500px] mx-auto'/>
    </div>
  </div>
  )
}

export default Services
