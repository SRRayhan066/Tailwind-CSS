import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [clickedItem,setClickedItem] = useState('home');

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    const changedItem = (item) => () =>{
        setClickedItem(item);
    }

    return (
        <div className='relative flex justify-between py-[3rem] z-20 
                        '>
            <div className='absolute font-bold text-4xl italic text-orange-600
                            lg:left-[10vw] md:left-[10vw] xs:left-[5vw]'>
                Fitness
            </div>
            <div className={`absolute right-5 md:hidden text-white text-3xl
                             ${isOpen ? 'hidden' : 'block'} 
                            `} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className={`border-2
                 lg:right-[10vw]
                 md:rounded-full ${isOpen ? 'block bg-stone-800' : 'hidden'} md:block md:right-[10vw]
                 xs:absolute xs:right-[5vw]`}>
                <div className='flex justify-center items-center' onClick={toggleMenu}>
                    <FontAwesomeIcon className='md:hidden md:text-0 md:p-0
                                                xs:text-xl xs:py-4
                                              text-white' icon={faBars} />
                </div>
                
                <ul className='lg:text-xl lg:space-x-8
                                md:flex md:space-x-5 md:space-y-0
                                xs:text-lg xs:space-y-5 
                              text-white '>
                    <li className={`${clickedItem==='home' ? 'bg-orange-600 md:rounded-full' : ''} py-2`} onClick={changedItem('home')}><a href='#' className='lg:px-4 md:px-2 xs:px-16'>Home</a></li>
                    <li className={`${clickedItem==='service' ? 'bg-orange-600 md:rounded-full' : ''} py-2`} onClick={changedItem('service')}><a href='#' className='lg:px-4 md:px-2 xs:px-16'>Service</a></li>
                    <li className={`${clickedItem==='contact' ? 'bg-orange-600 md:rounded-full' : ''} py-2`} onClick={changedItem('contact')}><a href='#' className='lg:px-4 md:px-2 xs:px-16'>Contact</a></li>
                    <li className={`${clickedItem==='about' ? 'bg-orange-600 md:rounded-full' : ''} py-2`} onClick={changedItem('about')}><a href='#' className='lg:px-4 md:px-2 xs:px-16'>About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;