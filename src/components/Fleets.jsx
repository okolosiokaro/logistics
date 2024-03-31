import React from 'react'
import { FleetLists } from '../data/data'

const Fleets = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto'>
    <h3 className='text-2xl font-bold'>Delivery Fleet</h3>
       <p className='md:text-xl text-sm mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates rem doloribus distinctio accusamus consectetur ipsa incidunt quidem eveniet velit.</p>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {FleetLists.map((FleetList) => (
          <div key={FleetList.id} className='mx-auto my-12'>
           <img src={FleetList.image} alt='truck ' className='w-[300px] h-[200px]'/>
            <div className='mt-2'>
              <ul>
                <li className='flex justify-between gap-1'>Model<span className='font-bold'>{FleetList.model}</span></li>
                <li className='flex justify-between gap-1'>Capacity<span className='font-bold'>{FleetList.capacity}</span></li>
                <li className='flex justify-between gap-1'>Range<span className='font-bold'>{FleetList.range}</span></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Fleets
