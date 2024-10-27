import React, { useState, useEffect, useRef } from 'react'
import productsData from '../data/products.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { gsap } from 'gsap';

function Hero() {
    //fetching product with index for hero banners
    const heroBanner1 = productsData.hero[0]
    const heroBanner2 = productsData.hero[1]

    // set mobile screen size detection (to darken first banner img when its in mobile view)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    //creates a ref to directly access the DOM element of the first banner (to animate)
    const firstHeroRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const stickyElement = firstHeroRef.current;
            const stickyTop = stickyElement.getBoundingClientRect().top;
            const scrollY = window.scrollY;
            const maxScroll = 1500;

            let brightnessValue = 1 - Math.min(scrollY / maxScroll, 1);

            if (stickyTop <= 0) {
                gsap.to(stickyElement, {
                    duration: 0.8,
                    filter: `brightness(${brightnessValue})`,
                });
            } else {
                gsap.to(stickyElement, {
                    duration: 0.8,
                    filter: 'brightness(1)',
                });
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);

        };
    }, []);


    return (
        <>
            <section className='pt-[80px] md:pt-[200px] h-full relative'>
                <div ref={firstHeroRef} className="wrapper first-hero sticky top-0 bottom-0 min-h-[80vh]" style={{
                    backgroundImage: isMobile
                        ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBanner1.src})`
                        : `url(${heroBanner1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                }} >

                    <div className='relative container mx-auto min-h-[80vh] flex flex-col items-center justify-center lg:flex-row'>
                        <div className='flex-1  text-center mt-10 lg:text-left'>
                            <h1 className='mb-4 text-white'>Discover Our New Friendly Friends!
                            </h1>
                            <p className='mb-8 text-gray-200'>
                                Unleash your imagination with our unique collection of soft, lovable monsters designed to bring joy and creativity to your life. Each monster is crafted with care and is ready to become your next cuddly companion!
                            </p>
                            <div className='relative inline-flex items-center group'>
                                <a href="/" className='bg-white border-black border-2 px-6 py-2 inline-flex z-10 cursor-pointer group'> Discover Now</a>
                                <div className='absolute w-full h-full border-2 border-black top-2 left-2 z-0 transition-all duration-500 ease-in-out group-hover:top-0 group-hover:left-0'></div>
                            </div>
                        </div>


                        <div className='hidden md:flex-1 md:block'>
                            <div className='flex items-center gap-4 -rotate-90 absolute bottom-1/2 right-0'>
                                <FontAwesomeIcon icon={faAngleLeft} className='text-xl text-gray-600 animate-upDown' />
                                <span className='uppercase tracking-wide text-lg text-gray-600'>Scroll</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='wrapper second-hero relative'>
                    <div className='z-10 relative'
                        style={{
                            backgroundImage: `url(${heroBanner2.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }} >
                        <div className='container mx-auto w-full min-h-[80vh] flex items-center'>
                            <div className='text-center mt-10 lg:text-left'>
                                <h1 className='mb-4 text-white'>Enter the Haunted Hideaway!
                                </h1>

                                <p className='mb-8 text-white'>
                                    Packed with potions, pumpkins, and paranormal thrills!
                                </p>

                                <div className='relative inline-flex items-center group'>
                                    <a href="/" className='bg-black border-white text-white border-2 px-6 py-2 inline-flex z-10 cursor-pointer group'> Shop Now</a>
                                    <div className='absolute w-full h-full border-2 border-white top-2 left-2 z-0 transition-all duration-500 ease-in-out group-hover:top-0 group-hover:left-0'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Hero
