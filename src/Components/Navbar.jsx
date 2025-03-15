import React,{useState} from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='relative z-20'>
         <div className="container py-10 flex justify-between items-center" >
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
               hover:shadow-[0px_10px_8px_-7px_#69a79c] py-2 px-6 hidden lg:block'
               >Sign In</button>
           
           {/* Mobile Menu Icon */}
        <button className="lg:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        </div>

        {isOpen && (
          <ul className="flex flex-col items-center gap-4">
          <li className="hover:text-secondary cursor-pointer">Home</li>
          <li className="hover:text-secondary cursor-pointer">Services</li>
          <li className="hover:text-secondary cursor-pointer">About Us</li>
          <li className="hover:text-secondary cursor-pointer">Our Team</li>
          <li className="hover:text-secondary cursor-pointer">Contact Us</li>
        </ul>
        )}
         
          
    </nav>
  )
}

export default Navbar