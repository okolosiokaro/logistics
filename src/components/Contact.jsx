import React from 'react'

const Contact = ({title, subTitle}) => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto'>
            <h3 className='text-center md:text-4xl sm:text-3xl text-xl text-gray-500 font-bold'>{title}</h3>
            <p className='text-center'>{subTitle}</p>
            <div className='grid md:grid-cols-3 my-12 gap-8'>

            </div>
    </div>
  </div>
  )
}

export default Contact
