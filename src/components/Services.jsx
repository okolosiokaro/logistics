import React, {useState} from 'react'
// import Modal from '../components/Modal'
import {ServiceList} from '../data/data.js'
// import { MdFlightTakeoff } from "react-icons/md";


const Services = () => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (ServiceList) => {
        setModalContent(ServiceList);
    }
    const closeModal = () => {
        setModalContent(null);
    }

  return (
          <div className=''>
                        <div className='max-w-[1240px] w-full mx-auto grid grid-cols-4 relative bottom-[-60px] bg-red-500'>
                {ServiceList.map((ServiceList) => (
                                    <div key={ServiceList.id} className='flex justify-center flex-col md:flex-row md:gap-4 p-4 hover:bg-gray-500 duration-300' onClick={() => openModal(ServiceList)}>
                                    <div className='text-4xl mx-auto'>{ServiceList.icon}</div>
                                    <div className=''>
                                      <p className=' text-xl text-center md:text-start'>{ServiceList.service}</p>
                                      <h3 className='hidden md:block text-2xl font-bold text-start'>{ServiceList.name}</h3>
                                    </div>
                                </div>
                ))}

  {modalContent && (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50' onClick={closeModal}>
    <div className='bg-white text-black w-3/4 md:w-1/2 rounded-lg shadow-lg p-6'>
      <div className='flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>{modalContent.name}</h2>
          <button className='text-gray-500 hover:text-gray-800' onClick={closeModal}>
              close
          </button>
      </div>
      <div className='mt-4'>
         <p>{modalContent.detail}</p>
      </div>
    </div>
  </div>
  )
  }
      
    </div>
          </div>

  )
}

export default Services
