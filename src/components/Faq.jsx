import React, {useState} from 'react'
import { Faqs } from '../data/data'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto'>
            <h3 className='text-2xl font-bold'>FAQ</h3>
            <p className='md:text-xl text-sm mt-4'>Frequently asked questions and answers</p>
            <div className='my-8'>
              {Faqs.map((Faq,index) => (
                <div key={index} className='my-2'>
                  <div className='flex justify-between items-center gap-2 p-2 border border-black hover:border-gray-50 hover:shadow-lg cursor-pointer rounded-lg ' onClick={() => toggleAnswer(index)}>
                    <h3 className='md:text-xl font-bold'>{Faq.question}</h3>
                    <div className={` ${activeIndex === index ? 'rotate-[-180deg]' : ''}`}>&#x25BC;</div>
                  </div>
                  {activeIndex === index && <p className='bg-white p-2 border rounded-lg shadow-lg'>{Faq.answer}</p>}
                </div>
              ))}
            </div>
    </div>
  </div>
  )
}

export default Faq
