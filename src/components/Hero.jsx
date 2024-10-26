import React, { useLayoutEffect, useRef } from 'react'
import productsData from '../data/products.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Hero() {
    //fetching product with index for hero banners
    const heroBanner1 = productsData.hero[0]
    const heroBanner2 = productsData.hero[1]

    const hero1Ref = useRef(null);
    const hero2Ref = useRef(null);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            gsap.to(hero1Ref.current, {
                y: '-200%', // Move up out of view
                scrollTrigger: {
                    trigger: hero1Ref.current,
                    start: "top top", // When Hero 1's top hits the top of the viewport
                    end: "bottom top",
                    scrub: 1,
                },
            });

        });

        return () => ctx.revert();
    }, [])


    return (
        <>
            <section className='mt-[80px] md:mt-[200px] relative'>
                <div ref={hero1Ref} className=' first-hero absolute top-0 left-0 bg-gradient-to-br from-white to-soft-blue min-h-[800px] w-full z-20'>
                    <div className='relative container mx-auto flex flex-col items-center justify-center lg:flex-row'>
                        <div className='flex-1  text-center mt-10 lg:text-left'>
                            <h1 className='mb-4'>Discover Your New Adorable Monster Friend!
                            </h1>
                            <p className='mb-4'>
                                Unleash your imagination with our unique collection of soft, lovable monsters designed to bring joy and creativity to your life. Each monster is crafted with care and is ready to become your next cuddly companion!
                            </p>
                            <div className='relative inline-flex items-center group'>
                                <a href="/" className='bg-white border-black border-2 px-6 py-2 inline-flex z-10 cursor-pointer group'> Discover Now</a>
                                <div className='absolute w-full h-full border-2 border-black top-2 left-2 z-0 transition-all duration-500 ease-in-out group-hover:top-0 group-hover:left-0'></div>
                            </div>
                        </div>

                        <div className='flex-1'>
                            <img src={heroBanner1.src} alt={heroBanner1.name} className=""
                            />
                        </div>

                        <div className='hidden md:block'>
                            <div className='flex items-center gap-4 -rotate-90 absolute bottom-1/2 right-0'>
                                <FontAwesomeIcon icon={faAngleLeft} className='text-xl text-gray-600 animate-upDown' />
                                <span className='uppercase tracking-wide text-lg text-gray-600'>Scroll</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={hero2Ref} className='second-hero z-10 relative'
                    style={{
                        backgroundImage: `url(${heroBanner2.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }} >
                    <div className='container mx-auto w-full min-h-[800px] flex items-center'>
                        <div className='text-center mt-10 lg:text-left'>
                            <h1 className='mb-4 text-white'>Enter the Haunted Hideaway!
                            </h1>

                            <p className='mb-4 text-white'>
                                Packed with potions, pumpkins, and paranormal thrills!
                            </p>

                            <div className='relative inline-flex items-center group'>
                                <a href="/" className='bg-black border-white text-white border-2 px-6 py-2 inline-flex z-10 cursor-pointer group'> Shop Now</a>
                                <div className='absolute w-full h-full border-2 border-white top-2 left-2 z-0 transition-all duration-500 ease-in-out group-hover:top-0 group-hover:left-0'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero
