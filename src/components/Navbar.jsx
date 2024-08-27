import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <div className='flex justify-between py-[3rem]'>
            <div className='font-bold text-4xl italic text-orange-600'>
                Fitness
            </div>
            <div className={`md:hidden
                             xs:${isOpen ? 'hidden' : 'block'} 
                            text-white text-3xl`} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={`border-2 md:rounded-full xs:${isOpen ? 'block' : 'hidden'} md:block`}>
                <div className='flex justify-center items-center' onClick={toggleMenu}>
                    <FontAwesomeIcon className='md:hidden md:text-0 md:p-0
                                                xs:text-xl xs:py-4
                                              text-white' icon={faBars} />
                </div>
                
                <ul className=' lg:text-xl lg:space-x-8
                                md:flex md:space-x-5 md:space-y-0
                                xs:text-lg xs:space-y-5
                              text-white '>
                    <li className='bg-orange-600 md:rounded-full py-2'><a href='#' className='lg:px-4 md:px-2 xs:px-16'>Home</a></li>
                    <li className='py-2'><a href='#' className='lg:px-4 md:px-2 xs:px-16'>Service</a></li>
                    <li className='py-2'><a href='#' className='lg:px-4 md:px-2 xs:px-16'>Contact</a></li>
                    <li className='py-2'><a href='#' className='lg:px-4 md:px-2 xs:px-16'>About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;