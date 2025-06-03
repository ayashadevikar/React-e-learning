import React from 'react';
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";



const Services = () => {
  return (
    <section className='bg-white'>
       <div className="container pb-14 pt-16 ">
          <h1 className='text-4xl font-bold text-left pb-10'>Services we provide</h1>
         
         <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 flex gap-4'>
        
             <div className='flex flex-col items-center bg-[#f4f4f4] rounded-2xl p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                 <TbWorldWww className='text-4xl mb-4 '/>
                 <h1 className="text-lg font-semibold text-center px-3">Web Development</h1>
             </div>

             <div className='flex flex-col items-center bg-[#f4f4f4] rounded-2xl p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                 <CiMobile3 className='text-4xl mb-4 '/>
                 <h1 className="text-lg font-semibold text-center px-3">Mobile Development</h1>
             </div>

             <div className='flex flex-col items-center bg-[#f4f4f4] rounded-2xl p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                 <CiMobile3 className='text-4xl mb-4 '/>
                 <h1 className="text-lg font-semibold text-center px-3">Mobile Development</h1>
             </div>

             <div className='flex flex-col items-center bg-[#f4f4f4] rounded-2xl p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                 <RiComputerLine className='text-4xl mb-4 '/>
                 <h1 className="text-lg font-semibold text-center px-3">Software Development</h1>
             </div>

             <div className='flex flex-col items-center bg-[#f4f4f4] rounded-2xl p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                 <IoMdHappy className='text-4xl mb-4 '/>
                 <h1 className="text-lg font-semibold text-center px-3">Satisfied clients</h1>
             </div>

             <div className='flex flex-col items-center bg-[#f4f4f4] rounded-2xl p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                 <IoPulseOutline className='text-4xl mb-4 '/>
                 <h1 className="text-lg font-semibold text-center px-3">SEO optimization</h1>
             </div>

             <div className='flex flex-col items-center bg-[#f4f4f4] rounded-2xl p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                 <BiSupport className='text-4xl mb-4 '/>
                 <h1 className="text-lg font-semibold text-center px-3">24/7 support</h1>
                
             </div>

     
             </div>
        
       </div>
    </section>
  )
}

export default Services