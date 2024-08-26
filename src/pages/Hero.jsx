import React from 'react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className='h-[715px] px-[250px] bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900'>
            <Navbar/>

            <div className='flex justify-center items-center'>
                <div className='w-2/3'>
                    <h1 className='text-7xl text-white font-bold pr-[400px]'>Get body in <br/><span className='font-serif font-thin italic'>shape</span> & stay<br/> healthy</h1>
                    <div className='my-5'>
                        <p className='text-gray-400'>A huge section of health and fitness content. Healthy recipes <br/>and transformation stories to help you get fit and stay fit.</p>
                        <div className='flex space-x-8 my-10'>
                            <div className='text-white text-2xl font-bold border-2 px-8 py-3 rounded-full bg-orange-600'>
                                Join Club Now!
                            </div>
                            <div className='text-white text-2xl font-bold border-2 px-8 py-3 rounded-full'>
                                Download App
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-1/3'>
                    <div className='absolute text-white text-sm z-1 top-0 left-0 ml-[300px] my-[125px] border-1 rounded-lg p-4 bg-stone-700 bg-opacity-80'><span className='font-bold text-4xl'>500+</span><br/> Free workout videos</div>
                    <img src={heroImage} className='z-0 top-0 left-0 ml-[100px]'></img>
                    <div className='absolute flex justify-between items-center space-x-2 text-white text-sm z-1 top-0 left-0 my-[420px] border-1 rounded-lg p-4 bg-stone-700 bg-opacity-80'>
                        <div className='w-[45px] h-[45px] bg-orange-600 rounded-full'> </div>
                        <div>
                            <span className='font-bold text-4xl'>350+</span><br/> Video tutorials</div>
                        </div>
                    </div>
                    <div className='absolute ml-[600px] z-1'>
                        <FontAwesomeIcon icon={faPlay} className='text-white' />
                    </div>
            </div>
        </div>
    );
};

export default Hero;