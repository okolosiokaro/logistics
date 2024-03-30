import React from 'react'
import { ServiceList } from '../data/data'
import service from '../assets/service.png'

const Services = () => {
  return (
  <div className='bg-gray-100 pb-16 px-4'>
    <div className='relative w-full max-w-[1240px] mx-auto flex justify-between lg:flex-row flex-col-reverse'>
      <div className='lg:w-2/3'>
      <h2 className='text-2xl font-bold'>What makes us special</h2>
       <p className='md:text-xl text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates rem doloribus distinctio accusamus consectetur ipsa incidunt quidem eveniet velit.</p>
      <div className='grid md:grid-cols-2 gap-6 mt-8'>
          {ServiceList.map((ServiceList) => (
            <div key={ ServiceList.id} className='flex justify-between gap-4'>
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
      <div className='md:w-1/2 lg:w-1/2 mx-auto'>
      <img src={service} alt='pic here' className=''/>
      </div>
    </div>
  </div>
  )
}

export default Services
