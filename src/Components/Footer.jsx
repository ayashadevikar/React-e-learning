import React from 'react';
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
    return (
    <section className='flex justify-around p-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center sm:text-left'>
          <div className='flex flex-col gap-4'>
              <h1 className="text-2xl font-bold">The Coding Journey</h1>
              <p className="text-dark2 flex flex-wrap md:w-[16rem]">
                TCJ is a platform dedicated to empowering aspiring developers.
               From beginner tutorials to advanced programming concepts, we
                provide a comprehensive learning experience designed to help you
               master coding skills, build projects, and launch your tech career.
             </p>
           </div>

          <div className='flex flex-col gap-4'>
              <h1 className="text-2xl font-bold">Courses</h1>
              <ul className="space-y-2 text-lg text-dark2">
                   <li className="cursor-pointer hover:text-secondary duration-200">
                     Web Development
                   </li>
                   <li className="cursor-pointer hover:text-secondary duration-200">
                     Software Development
                   </li>
                   <li className="cursor-pointer hover:text-secondary duration-200">
                     Apps Development
                   </li>
                   <li className="cursor-pointer hover:text-secondary duration-200">
                     E-learning
                   </li>
                 </ul>
          </div>

          <div className='flex flex-col gap-4'>
              <h1 className="text-2xl font-bold">Links</h1>
               <ul className="space-y-2 text-lg text-dark2">
                   <li className="cursor-pointer hover:text-secondary duration-200">
                     Home
                   </li>
                   <li className="cursor-pointer hover:text-secondary duration-200">
                     Services
                   </li>
                   <li className="cursor-pointer hover:text-secondary duration-200">
                     About
                   </li>
                   <li className="cursor-pointer hover:text-secondary duration-200">
                     Contact
                   </li>
                 </ul>
          </div>

          <div className='flex flex-col gap-4'>
               <h1 className="md:text-2xl font-bold">Get In Touch</h1>
               <div className="flex items-center">
                 <input
                        type="text"
                        placeholder="Enter your email"
                        className="p-3 rounded-s-xl bg-white-500 border-2 w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
                   />
                  <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                     Go
                  </button>
             </div>
          

            <div className='flex gap-8'>
                    <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0">
                       <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                    </a>
                    <a href="https://www.instagram.com/the.coding.journey/">
                        <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                    </a>
                    <a href="https://thecodingjourney.com/">
                        <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                    </a>
                    <a href="https://www.youtube.com/@TheCodingJourney">
                       <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                    </a>
            </div> 

          </div>  
          </section>
    )
 }

export default Footer;