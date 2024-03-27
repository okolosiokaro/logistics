import React from 'react'

const Modal = ({isOpen, onClose, title, content}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
      <div className='bg-white w-1/2 rounded-lg shadow-lg p-6'>
        <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>{title}</h2>
            <button className='text-gray-500 hover:text-gray-800' onClick={onClose}>
                close
            </button>
        </div>
        <div className='mt-4'>
            {content}
        </div>
      </div>
    </div>
  )
}

export default Modal
