import React from 'react'
import Contact from '../components/Contact'

const ContactUs = () => {
  return (
    <div>
      <div className='mt-4'>
         <div className='bg-black text-center text-white p-10 md:p-12 rounded-lg'>
            <h3 className='text-2xl md:text-4xl font-bold'>Contact us</h3>
            <p className='p-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, facilis!</p>
         </div>
         <Contact />
      </div>
      
    </div>
  )
}

export default ContactUs
