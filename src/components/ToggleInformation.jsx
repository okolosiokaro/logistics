import React, {useState} from 'react'

const ToggleInformation = ({defaultVisible, information}) => {
    const [isVisible, setIsVisible] = useState(defaultVisible);

    const toggleVisibility = () => {
        setIsVisible(preVisible => !preVisible);
    };
  return (
    <div className=  {isVisible ? 'inline' : 'inline ml-2'}>
      {isVisible && (
            <p>{information}</p>
      )}
      <button onClick={toggleVisibility} className='text-white font-normal hover:underline '>
        {isVisible ? 'hide info' : 'more info'}
      </button>
    </div>
  )
}

export default ToggleInformation
