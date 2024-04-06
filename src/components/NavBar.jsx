import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}
nav ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden')

  return (
    <div className="flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="text-3xl font-bold text-[#00df9a]">React</h1>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4">Home</li>
        <li className="p-4">Services</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Sign In</li>
        <li className="p-4">Careers</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
      {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/> }
      </div>

      <div className={nav ? 'fixed top-0 left-0 w-full h-full bg-black/50 z-20' : ''}></div>
      <div className={nav ? "fixed left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500 rounded-r-xl z-50" : "fixed left-[-100%] ease-in-out duration-300" }>
                <ul className="p-4 uppercase cursor-pointer">
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Services</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Contact</li>
        <li className="p-4">Sign In</li>
        <li className="p-4">Careers</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
