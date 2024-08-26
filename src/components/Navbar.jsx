import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between py-[35px]'>
            <div className='font-bold text-4xl italic text-orange-600'>
                Fitness
            </div>
            <div className='border-2 rounded-full'>
                <ul className='flex text-xl space-x-8 text-white '>
                    <li className='bg-orange-600 rounded-full py-2'><a href='#' className='px-4'>Home</a></li>
                    <li className='py-2'><a href='#' className='px-4'>Service</a></li>
                    <li className='py-2'><a href='#' className='px-4'>Contact</a></li>
                    <li className='py-2'><a href='#' className='px-4'>About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;