import React from 'react';
import BannerPng from "../assets/banner.png";

const Banner2 = () => {
  return (
    <div className='flex flex-wrap md:flex justify-center items-center py-20'>
        <div className="flex flex-col gap-2 w-[29%] ">
            <h1 className="text-xl md:text-4xl font-bold !leading-snug"> Join Our Community to Start your Journey</h1>
        

           <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>

            <a
              href=""
              className="bg-primary !mt-8 w-24 px-1 py-2 rounded-md text-center text-white"
            >
              Join Now
            </a>
       
        </div>

        <div>
        <img src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
    </div>
  )
}

export default Banner2