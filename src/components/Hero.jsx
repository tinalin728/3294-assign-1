import React, { useState, useEffect } from 'react'
import productsData from '../data/products.json'


function Hero() {
    //fetching one product
    const hero = productsData.hero[0]

    return (
        <>
            <section className='bg-gradient-to-br from-white to-soft-blue h-full'>
                <div className='container mx-auto flex flex-col items-center lg:flex-row'>
                    <div className='flex-1 text-center mt-10 lg:text-left'>
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
                        <img src={hero.src} alt={hero.name} className=""
                        />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero
