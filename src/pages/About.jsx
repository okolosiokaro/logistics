import React from 'react'
import laptop from '../assets/laptop.jpg'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <div className='relative'>
           <div className='absolute w-full h-[200px] bg-black/50 text-center text-white p-10 md:p-12'>
             <h3 className='text-2xl md:text-4xl font-bold'>About</h3>
              <p className='p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eius?</p>
           </div>
           <img className='w-full h-[200px] object-cover' src={laptop} alt="/"/>
        </div>
        <div className='w-full bg-gray-100 pt-16 px-4'>
      
        </div>
      <Footer />
    </div>
  )
}

export default About
