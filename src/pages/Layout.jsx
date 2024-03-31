import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}
  return (
    <>
    <div className="flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
    <h1 className="text-3xl font-bold text-[#00df9a]">React</h1>
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
    <div className={nav ? "z-50 fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%] " }>
    <h1 className="text-3xl font-bold text-[#00df9a] m-4">React</h1>
    <nav>
        <ul className="p-4 uppercase cursor-pointer">
          <li className="p-4 border-b border-gray-600  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/'>Home</Link></li>
          <li className="p-4 border-b border-gray-600  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/aboutus'>About</Link></li>
          <li className="p-4 border-b border-gray-600  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/services'>Services</Link></li>
          <li className="p-4 border-b border-gray-600  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/contactus'>Contact Us</Link></li>
          <li className="p-4  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/signin'>Sign In</Link></li>
          <li className="p-4  hover:border hover:border-[#00df9a] hover:text-[#00df9a]"><Link to='/careers'>Careers</Link></li>
        </ul>
    </nav>
    </div>
  </div>
  <Outlet />
  </>
  )
}

export default Layout
