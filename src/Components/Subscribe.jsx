import React from 'react';
import { FaBell } from "react-icons/fa";
// import BgImage from "../../assets/bg.png";

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
        <div className="container py-24 md:py-48">
          <div className='flex flex-col justify-center'>
              <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
                <h1 className="text-4xl font-bold !leading-snug">
                  450K+ Students are learning from us
               </h1>
                 <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Recusandae iusto minima
               </p>
               <a
                 href=""
                className="bg-primary !mt-8 text-white px-4 py-2 hover:bg-secondary rounded-md inline-flex items-center gap-4 group"
               >
                Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
         </div> 
      </div>
    </section>
  )
}

export default Subscribe