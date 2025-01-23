import React from 'react';
import BannerPng from "../assets/banner.png";

const Banner = () => {
  return (
    <section>
        <div className='container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0' >
            {/* Banner Image */}
            <div className='flex justify-center items-center'>
                <img src={BannerPng} alt="banner-img" className='w-[350px] md:max-w-[450px] object-cover drop-shadow' />
            </div>

            {/* Banner Text */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-12'>
                     <h1 className='text-3xl md:text-4xl font-bold !leading-snug'>
                        The World's Leading Online learning Platform 
                     </h1>
               
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner