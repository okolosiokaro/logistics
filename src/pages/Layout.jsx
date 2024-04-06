import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}
nav?document.body.classList.add('overflow-hidden'):document.body.classList.remove('overflow-hidden');

  return (
    <>
    <div className="fixed top-0 z-50 bg-black/50  w-full">
      <div className='flex justify-between  items-center max-w-[1240px] h-24 mx-auto px-4 text-white'>
      <h1 className="text-3xl font-bold text-[#00df9a]">LCL</h1>
    <nav>
        <ul className="hidden lg:flex cursor-pointer">
          <li className="p-4  hover:border hover:border-[#00df9a]  hover:text-[#00df9a]"><Link to='/'>Home</Link></li>
          <li className="p-4  hover:border hover:border-[#00df9a]  hover:text-[#00df9a]"><Link to='/aboutus'>About</Link></li>
          <li className="p-4  hover:border hover:border-[#00df9a]  hover:text-[#00df9a]"><Link to='/services'>Services</Link></li>
          <li className="p-4  hover:border hover:border-[#00df9a]  hover:text-[#00df9a]"><Link to='/contactus'>Contact Us</Link></li>
          <li className="p-4  hover:border hover:border-[#00df9a]  hover:text-[#00df9a]"><Link to='/signin'>Sign In</Link></li>
          <li className="p-4  hover:border hover:border-[#00df9a]  hover:text-[#00df9a]"><Link to='/careers'>Careers</Link></li>
        </ul>
    </nav>
 
    <div onClick={handleNav} className="block lg:hidden">
    {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/> }
    </div>

    <div  onClick={handleNav} className={nav ? 'fixed top-0 left-0 w-full h-full bg-black/50 z-20' : 'hidden'}></div>
    <div className={nav ? "z-50 fixed left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-300 rounded-r-xl" : "fixed top-0 left-[-100%]" }>
    <div className='flex justify-between items-center'>
         <h1 className="text-3xl font-bold text-[#00df9a] m-4">LCL</h1>
         <div onClick={handleNav} className="p-4">
           {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/> }
         </div>
        </div>
    <nav>
        <ul className="p-4 uppercase cursor-pointer">
          <li  onClick={handleNav}u  className="p-4 border-b border-gray-600  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/'>Home</Link></li>
          <li  onClick={handleNav}u  className="p-4 border-b border-gray-600  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/aboutus'>About</Link></li>
          <li  onClick={handleNav}u  className="p-4 border-b border-gray-600  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/services'>Services</Link></li>
          <li  onClick={handleNav}u  className="p-4 border-b border-gray-600  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/contactus'>Contact Us</Link></li>
          <li  onClick={handleNav}u  className="p-4  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/signin'>Sign In</Link></li>
          <li  onClick={handleNav}u  className="p-4  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/careers'>Careers</Link></li>
        </ul>
    </nav>
    </div>
      </div>
    
  </div>
  <Outlet />
  </>
  )
}

export default Layout
