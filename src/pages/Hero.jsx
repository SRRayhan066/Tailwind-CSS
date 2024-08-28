import React from 'react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/hero.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className='relative z-0 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900
                        lg:pt-[5vh]'>

            

            <div className='lg:flex lg:justify-between lg:items-center lg:m-[0vh]
                            md:m-[8vh]
                            xs:m-[5vh]'>
                {/* left class */}

                <div className='md:ml-[10vw]
                                xs:ml-[0vw]
                                '>
                    <h1 className='lg:text-7xl
                                   md:text-8xl
                                   xs:text-6xl
                                   text-white font-bold'>Get body in <br/><span className='font-serif font-thin italic'>shape</span> & stay<br/> healthy</h1>

                    <div className='my-5'>
                        <p className='text-gray-400'>A huge section of health and fitness content. Healthy recipes <br/>and transformation stories to help you get fit and stay fit.</p>
                    </div>

                    <div className='flex
                                    md:justify-normal 
                                    xs:justify-center space-x-8 my-8'>
                        <div className='text-white font-bold border-2 px-8 py-3 rounded-full bg-orange-600
                                        xl:text-2xl
                                        lg:text-lg
                                        md:text-xl
                                        xs:text-xl'>
                            Join Club Now!
                        </div>
                        <div className='text-white font-bold border-2 px-8 py-3 rounded-full
                                        xl:text-2xl
                                        lg:text-lg
                                        md:text-xl
                                        xs:text-xl'>
                            Download App
                        </div>
                    </div>
                </div>

                <div className='relative z-0'>
                    {/* <div className='absolute z-10
                                    lg:top-[31vh]
                                    md:top-[35vh] md:left-[12vw]'>
                        <FontAwesomeIcon icon={faPlay} className='text-white' />
                    </div> */}
                    <div className='flex justify-center items-center z-0'>
                        <img src={heroImage} className='md:mr-[12vw]'></img>
                    </div>
                </div>
                
            </div>

            <div className='z-10'>

                <div className='absolute border-1 rounded-lg bg-stone-700 bg-opacity-80 text-white p-4
                                xl:text-xl xl:top-[17vh] xl:right-[7vw]
                                lg:text-lg lg:top-[17vh] lg:right-[7vw]
                                md:top-[70vh] md:right-[32vw] 
                                xs:top-[55vh] xs:right-[17vw]'>    
                    <span className='font-bold
                                    xl:text-4xl
                                    lg:text-3xl
                                    md:text-3xl
                                    xs:text-3xl'>500+</span><br/>
                    Free Workout Videos         
                </div>

                <div className='absolute flex justify-center items-center space-x-3 p-4 border-1 rounded-lg bg-stone-700 bg-opacity-80 text-white bottom-[7vh]
                                xl:text-xl xl:right-[23vw]
                                lg:text-lg lg:right-[27vw]
                                md:right-[60vw]
                                xs:right-[55vw]'>    
                    <div className='w-[45px] h-[45px] bg-orange-600 rounded-full'></div>
                    <div>
                        <span className='font-bold 
                                        xl:text-4xl
                                        lg:text-3xl
                                        md:text-3xl
                                        xs:text-3xl'>350+</span><br/> Video Tutorial
                    </div>          
                </div>
            </div>

            

        </div>
    );
};

export default Hero;