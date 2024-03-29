
import { ReactTyped } from "react-typed";
import ToggleInformation from './ToggleInformation';
import ServiceCard from './ServiceCard';
import laptop from '../assets/laptop.jpg';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="absolute left-0 w-full h-screen mx-auto text-center flex flex-col justify-center bg-black/50">
       <p className="text-[#00df9a] font-bold p-2">Welcome to</p>
       <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold md:py-4">LOGISTICS COMPANY LIMITED</h1>
       <div className='flex items-center justify-center'>
        <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Best logistics solution for</p>
        <ReactTyped
        className='md:text-4xl sm:text-3xl text-xl text-[#00df9a] font-bold pl-2'
        strings={["Clearance", "Transportation", "Distribution"]}
        typeSpeed={120}
        backSpeed={140}
        loop
        />
       </div>
       <p className='md:text-xl text-sm  max-w-[700px] mx-auto'>At Logistics Company Limited, we're dedicated to delivering excellence in logistics solutions tailored to meet your unique needs. 
      <ToggleInformation defaultVisible={false} information="Whether you're a small business or a large corporation, our comprehensive services ensure seamless transportation and supply chain management from start to finish." /></p>
  
      <button className='bg-[#00df9a] hover:bg-blue-500 w-[200px] rounded-md font-medium mt-12 mx-auto px-6 py-3 text-black hover:text-white text-bold'>Explore Services</button>
      </div>
      <img className='w-full h-screen object-cover' src={laptop} alt="/"/>
      <ServiceCard />
    </div>
  )
}

export default Hero
