import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className='relative z-20'>
         <motion.div
             initial={{ opacity: 0, y: -50 }}
             animate={{ opacity: 1, y: 0 }}
             className="container py-10 flex justify-between items-center"
         >
            <div>
                <h1 className='font-bold text-2xl'>The Coding Journey</h1>
            </div>

            {/* Menu Section */}
            <div className='hidden lg:block'>
                 <ul  className='flex items-center gap-3'>
                    <li className='hover:text-secondary'>Home</li>
                    <li className='hover:text-secondary'>Services</li>
                    <li className='hover:text-secondary'>About Us</li>
                    <li className='hover:text-secondary'>Our Team</li>
                    <li className='hover:text-secondary'>Contact Us</li>
                 </ul>
            </div>

            <button className='primary-btn inline-block bg-primary text-white font-semibold rounded-lg 
               hover:bg-secondary duration-200 shadow-[0px_10px_8px_-7px_#ffd978] 
               hover:shadow-[0px_10px_8px_-7px_#69a79c] py-2 px-6'>Sign In</button>
           
          
           {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
          </div>
          </motion.div>
    </nav>
  )
}

export default Navbar