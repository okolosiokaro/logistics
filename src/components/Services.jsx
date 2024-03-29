import React from 'react'
import { ServiceList } from '../data/data'

const Services = () => {
  return (
  <div className='w-full bg-gray-100 pb-16 px-4'>
    <div className='max-w-[1240px] mx-auto flex justify-between md:flex-row flex-col-reverse'>
      <div className='w-full md:w-2/3'>
      <h2 className='text-2xl font-bold'>What makes us special</h2>
       <p className='md:text-xl text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates rem doloribus distinctio accusamus consectetur ipsa incidunt quidem eveniet velit.</p>
      <div className='grid md:grid-cols-2 gap-6 mt-8'>
          {ServiceList.map((ServiceList) => (
            <div key={ ServiceList.id} className='flex justify-between gap-4'>
              <div className='text-2xl md:text-4xl'>
                {ServiceList.icon}
              </div>
              <div>
                <h5 className=' text-lg md:text-xl font-bold'>{ServiceList.name}</h5>
                <p className='md:text-xl text-sm mt-2'>{ServiceList.detail}</p>
              </div>
            </div>
          ))}
      </div>
      </div>
      <img src='/' alt='pic here'/>
    </div>
  </div>
  )
}

export default Services
